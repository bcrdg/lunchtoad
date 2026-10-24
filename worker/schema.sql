-- Lunch Toad high scores (Cloudflare D1). Apply with:
--   npx wrangler d1 execute lunch-toad --remote --file=schema.sql
-- Every saved score is its own row, so two players saving at the same moment
-- can never overwrite each other. A board shows each name's best row, top N by score.
CREATE TABLE IF NOT EXISTS scores (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  board      TEXT    NOT NULL,              -- 'scores' (Toad Road) or 'tongue-scores' (Tongue Time)
  name       TEXT    NOT NULL,
  score      INTEGER NOT NULL,
  level      INTEGER,                       -- Toad Road only
  date       TEXT    NOT NULL,              -- YYYY-MM-DD, Pacific time
  created_at TEXT    NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS scores_board_score ON scores (board, score DESC, id);
