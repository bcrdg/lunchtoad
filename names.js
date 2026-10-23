// High-score name rules shared by toad-road.html and tongue-time.html.
// The Cloudflare Worker (worker/src/index.js) has its own copy: keep them in sync.

const NAME_MAX = 15; // high-score names: 1-15 letters/numbers (the Worker allows the same)
// Names are blocked if they ARE one of these (short words that show up inside
// normal names, e.g. "ASS" in "GRASS", so they're only blocked on their own)...
const NOT_ALLOWED = ['ASS', 'FUK', 'FUC', 'FCK', 'SEX', 'CUM', 'DIK', 'DIC', 'FAG', 'NIG', 'KKK', 'TIT', 'TITS', 'POO', 'PEE', 'WTF', 'GAY', 'JEW', 'NAZ', 'HOE', 'HO', 'ANUS', 'ARSE', 'RAPE', 'SPIC'];
// ...or if they CONTAIN one of these anywhere.
const NOT_ALLOWED_INSIDE = ['FUCK', 'FUK', 'FCK', 'PHUK', 'SHIT', 'SH1T', 'CUNT', 'NIGG', 'N1GG', 'NIGA', 'FAGG', 'FAG0',
  'DICK', 'D1CK', 'COCK', 'C0CK', 'PUSSY', 'BITCH', 'B1TCH', 'NAZI', 'HITLER', 'KKK', 'PENIS', 'VAGINA', 'SLUT', 'WHORE',
  'RAPIST', 'BOOB', 'TWAT', 'WANK', 'JIZZ', 'CUMS', 'CUMM', 'ASSHOLE', 'DUMBASS', 'JACKASS', 'BADASS', 'SEXY', 'SEXX',
  'PORN', 'RETARD', 'TRANNY', 'DYKE', 'KIKE', 'CHINK', 'WETBACK', 'MOLEST', 'PEDO', 'KILLYOU'];
function nameBlocked(name) {
  const n = name.toUpperCase();
  // Also catch number swaps like 5H1T or B00B
  const plain = n.replace(/0/g, 'O').replace(/1/g, 'I').replace(/3/g, 'E').replace(/4/g, 'A').replace(/5/g, 'S').replace(/7/g, 'T');
  return [n, plain].some(v => NOT_ALLOWED.includes(v) || NOT_ALLOWED_INSIDE.some(w => v.includes(w)));
}
function cleanName(value) { return String(value || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, NAME_MAX); }
