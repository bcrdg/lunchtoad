// Lunch Toad API: a Cloudflare Worker. High scores are stored in Cloudflare D1
// (one row per score, see schema.sql); Workers KV holds the save rate limit.
//
// Holds the shared high-score boards so the website itself has no secrets in it.
// Each board has the same three calls:
//
//   GET  /<board>   -> { scores: [...] }            anyone (allowed sites only, via CORS)
//   POST /<board>   -> add one score                 anyone; the Worker checks it
//        body: { name, score, level? }
//   PUT  /<board>   -> replace the whole board       needs header X-Edit-Key = secret EDIT_KEY
//        body: { scores: [...] }                    (deletes that board's rows, inserts these)
//
// Boards (see BOARDS):  /scores         Toad Road      (rows with board = 'scores')
//                       /tongue-scores  Tongue Time    (rows with board = 'tongue-scores')
//
// Why D1 and not KV for scores: KV is eventually consistent (reads can be up to
// ~60s stale), so "read board, add score, write board" lost scores when two
// people saved close together. Each score is now its own INSERT, so nothing
// can be overwritten, and every score ever saved is kept (handy for recovery).
//
// Bindings: DB (D1 "lunch-toad"), LUNCH_KV (rate limit; also the old pre-D1 boards).
// Secret: EDIT_KEY (set with `wrangler secret put EDIT_KEY`, never in a file).

const ALLOWED_ORIGINS = [
  'https://sonoralunchtoad.com',
  'https://www.sonoralunchtoad.com',
  'https://bcrdg.github.io',
];
const BOARDS = {
  '/scores':        { key: 'scores',        size: 10, maxScore: 1e7, hasLevel: true },   // Toad Road: top 10
  '/tongue-scores': { key: 'tongue-scores', size: 20, maxScore: 2e5, hasLevel: false },  // Tongue Time: top 20 (45s rounds)
};
const MAX_PUT_BYTES = 200 * 1024;
const MAX_POST_BYTES = 1024;
const SAVES_PER_MINUTE = 5; // per IP address, across all boards

// Same name rules as names.js on the website (kept in sync by hand).
const NAME_MAX = 15;
const NOT_ALLOWED = ['ASS', 'FUK', 'FUC', 'FCK', 'SEX', 'CUM', 'DIK', 'DIC', 'FAG', 'NIG', 'KKK', 'TIT', 'TITS', 'POO', 'PEE', 'WTF', 'GAY', 'JEW', 'NAZ', 'HOE', 'HO', 'ANUS', 'ARSE', 'RAPE', 'SPIC'];
const NOT_ALLOWED_INSIDE = ['FUCK', 'FUK', 'FCK', 'PHUK', 'SHIT', 'SH1T', 'CUNT', 'NIGG', 'N1GG', 'NIGA', 'FAGG', 'FAG0',
  'DICK', 'D1CK', 'COCK', 'C0CK', 'PUSSY', 'BITCH', 'B1TCH', 'NAZI', 'HITLER', 'KKK', 'PENIS', 'VAGINA', 'SLUT', 'WHORE',
  'RAPIST', 'BOOB', 'TWAT', 'WANK', 'JIZZ', 'CUMS', 'CUMM', 'ASSHOLE', 'DUMBASS', 'JACKASS', 'BADASS', 'SEXY', 'SEXX',
  'PORN', 'RETARD', 'TRANNY', 'DYKE', 'KIKE', 'CHINK', 'WETBACK', 'MOLEST', 'PEDO', 'KILLYOU'];

function nameBlocked(name) {
  const n = name.toUpperCase();
  const plain = n.replace(/0/g, 'O').replace(/1/g, 'I').replace(/3/g, 'E').replace(/4/g, 'A').replace(/5/g, 'S').replace(/7/g, 'T');
  return [n, plain].some(v => NOT_ALLOWED.includes(v) || NOT_ALLOWED_INSIDE.some(w => v.includes(w)));
}

function cleanEntry(e, board) {
  if (!e || typeof e.name !== 'string') return null;
  const name = e.name.toUpperCase();
  if (!/^[A-Z0-9]{1,15}$/.test(name) || name.length > NAME_MAX || nameBlocked(name)) return null;
  if (!Number.isInteger(e.score) || e.score < 0 || e.score >= board.maxScore) return null;
  const date = /^\d{4}-\d{2}-\d{2}$/.test(String(e.date || '')) ? e.date : todayPacific();
  const entry = { name, score: e.score };
  if (board.hasLevel) entry.level = Math.max(1, Math.min(999, parseInt(e.level, 10) || 1));
  entry.date = date;
  return entry;
}

function cleanBoard(list, board) {
  return (Array.isArray(list) ? list : [])
    .map(e => cleanEntry(e, board))
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, board.size);
}

function todayPacific() {
  return new Date().toLocaleDateString('en-CA', { timeZone: 'America/Los_Angeles' });
}

function corsHeaders(origin) {
  const h = { 'Vary': 'Origin' };
  if (ALLOWED_ORIGINS.includes(origin)) {
    h['Access-Control-Allow-Origin'] = origin;
    h['Access-Control-Allow-Methods'] = 'GET, POST, PUT, OPTIONS';
    h['Access-Control-Allow-Headers'] = 'Content-Type, X-Edit-Key';
    h['Access-Control-Max-Age'] = '86400';
  }
  return h;
}

function json(data, status, origin, extra) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...corsHeaders(origin), ...(extra || {}) },
  });
}

// Reads the body as JSON, refusing anything over `limit` bytes.
async function readBody(request, limit) {
  const declared = parseInt(request.headers.get('Content-Length') || '0', 10);
  if (declared > limit) return { tooBig: true };
  const buf = await request.arrayBuffer();
  if (buf.byteLength > limit) return { tooBig: true };
  try { return { data: JSON.parse(new TextDecoder().decode(buf)) }; }
  catch (e) { return { invalid: true }; }
}

// Constant-time string compare, so the key can't be guessed by timing.
async function keyMatches(given, secret) {
  if (!given || !secret) return false;
  const enc = new TextEncoder();
  const [a, b] = await Promise.all([crypto.subtle.digest('SHA-256', enc.encode(given)), crypto.subtle.digest('SHA-256', enc.encode(secret))]);
  const x = new Uint8Array(a), y = new Uint8Array(b);
  let diff = 0;
  for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
  return diff === 0;
}

// The board shows ONE score per name: each player's best (ties go to the
// earliest). All their other scores stay in the table, they just aren't shown.
// Fetches a few extra so any rows the name filter rejects (e.g. if the
// blocklist grows) don't leave the board short.
const BOARD_SQL = `
  SELECT name, score, level, date FROM (
    SELECT name, score, level, date, id,
           ROW_NUMBER() OVER (PARTITION BY name ORDER BY score DESC, id ASC) AS pick
    FROM scores WHERE board = ?
  ) WHERE pick = 1
  ORDER BY score DESC, id ASC
  LIMIT ?`;
async function loadBoard(env, board) {
  const { results } = await env.DB.prepare(BOARD_SQL).bind(board.key, board.size + 10).all();
  return cleanBoard(results, board);
}
function insertStatement(env, board, e) {
  return env.DB
    .prepare('INSERT INTO scores (board, name, score, level, date) VALUES (?, ?, ?, ?, ?)')
    .bind(board.key, e.name, e.score, board.hasLevel ? e.level : null, e.date);
}

// Light rate limit: a few saves per minute per IP. KV is eventually consistent,
// so this is a speed bump, not a wall.
async function rateLimited(env, request) {
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  const key = 'rl:' + ip + ':' + Math.floor(Date.now() / 60000);
  const count = parseInt(await env.LUNCH_KV.get(key) || '0', 10);
  if (count >= SAVES_PER_MINUTE) return true;
  await env.LUNCH_KV.put(key, String(count + 1), { expirationTtl: 120 });
  return false;
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: ALLOWED_ORIGINS.includes(origin) ? 204 : 403, headers: corsHeaders(origin) });
    }
    // Browsers on other sites are refused. (Requests with no Origin, like curl,
    // still work for reads; writes from them are still checked like any other.)
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
      return json({ error: 'origin not allowed' }, 403, origin);
    }

    if (url.pathname === '/' || url.pathname === '') {
      return json({ ok: true, service: 'lunch-toad', boards: Object.keys(BOARDS) }, 200, origin);
    }

    const board = BOARDS[url.pathname];
    if (!board) return json({ error: 'not found' }, 404, origin);

    if (request.method === 'GET') {
      return json({ scores: await loadBoard(env, board) }, 200, origin);
    }

    if (request.method === 'POST') {
      const body = await readBody(request, MAX_POST_BYTES);
      if (body.tooBig) return json({ error: 'too big' }, 413, origin);
      if (body.invalid) return json({ error: 'invalid JSON' }, 400, origin);
      const entry = cleanEntry({ ...body.data, date: todayPacific() }, board);
      if (!entry) return json({ error: 'score not accepted' }, 422, origin);
      if (await rateLimited(env, request)) return json({ error: 'slow down' }, 429, origin, { 'Retry-After': '60' });
      await insertStatement(env, board, entry).run();
      return json({ scores: await loadBoard(env, board), entry }, 200, origin);
    }

    if (request.method === 'PUT') {
      if (!(await keyMatches(request.headers.get('X-Edit-Key'), env.EDIT_KEY))) {
        return json({ error: 'forbidden' }, 403, origin);
      }
      const body = await readBody(request, MAX_PUT_BYTES);
      if (body.tooBig) return json({ error: 'too big' }, 413, origin);
      if (body.invalid) return json({ error: 'invalid JSON' }, 400, origin);
      if (!body.data || !Array.isArray(body.data.scores)) return json({ error: 'expected { "scores": [...] }' }, 400, origin);
      // Keeps every valid row sent (not just the top N), so nothing is trimmed by accident.
      const rows = body.data.scores.map(e => cleanEntry(e, board)).filter(Boolean);
      await env.DB.batch([
        env.DB.prepare('DELETE FROM scores WHERE board = ?').bind(board.key),
        ...rows.map(e => insertStatement(env, board, e)),
      ]);
      return json({ scores: await loadBoard(env, board) }, 200, origin);
    }

    return json({ error: 'method not allowed' }, 405, origin, { 'Allow': 'GET, POST, PUT, OPTIONS' });
  },
};
