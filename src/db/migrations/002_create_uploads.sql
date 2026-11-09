CREATE TABLE IF NOT EXISTS uploads (
  id             INTEGER PRIMARY KEY,
  user_id        INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  stored_name    TEXT    NOT NULL UNIQUE,   -- tên file ngẫu nhiên trên đĩa
  original_name  TEXT    NOT NULL,          -- tên người dùng đặt, chỉ để hiển thị
  mime           TEXT    NOT NULL,
  size           INTEGER NOT NULL,
  created_at     TEXT    NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_uploads_user ON uploads(user_id, id DESC);
