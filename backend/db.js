const sqlite3 = require('sqlite3').verbose();

function openDb() {
  const db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
      console.error('Database opening error:', err);
    }
  });

  db.run(`
    CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId TEXT,
      sessionId TEXT,
      page TEXT,
      eventType TEXT,
      timestamp INTEGER,
      data TEXT
    )
  `);

  return {
    run: (query, params) => new Promise((resolve, reject) => {
      db.run(query, params, function(err) {
        if (err) reject(err);
        else resolve(this);
      });
    }),
    all: (query, params) => new Promise((resolve, reject) => {
      db.all(query, params, (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    }),
    prepare: (query) => new Promise((resolve, reject) => {
      try {
        const stmt = db.prepare(query);
        resolve({
          run: (params) => new Promise((res, rej) => {
            stmt.run(params, function(err) {
              if (err) rej(err);
              else res(this);
            });
          }),
          finalize: () => new Promise((res, rej) => {
            stmt.finalize((err) => {
              if (err) rej(err);
              else res();
            });
          })
        });
      } catch (err) {
        reject(err);
      }
    })
  };
}

module.exports = { openDb };
