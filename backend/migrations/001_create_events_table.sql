CREATE TABLE IF NOT EXISTS events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  userId TEXT,
  sessionId TEXT,
  page TEXT,
  eventType TEXT,
  timestamp INTEGER,
  data TEXT
);
