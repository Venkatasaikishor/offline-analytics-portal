const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');
const { openDb } = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

const db = openDb();

// Ingest raw events
app.post('/api/events', async (req, res) => {
  const { events } = req.body;
  try {
    await db.run('BEGIN TRANSACTION');
    const stmt = await db.prepare(
      'INSERT INTO events (userId, sessionId, page, eventType, timestamp, data) VALUES (?, ?, ?, ?, ?, ?)'
    );
    for (const event of events) {
      await stmt.run(
        event.userId,
        event.sessionId,
        event.page,
        event.eventType,
        event.timestamp,
        JSON.stringify(event.data)
      );
    }
    await stmt.finalize();
    await db.run('COMMIT');
    res.status(200).json({ success: true });
  } catch (error) {
    await db.run('ROLLBACK');
    res.status(500).json({ error: error.message });
  }
});

// Get aggregated insights
app.get('/api/insights', async (req, res) => {
  const { userId, sessionId, page, startDate, endDate } = req.query;
  let query = `
    SELECT 
      page,
      eventType,
      COUNT(*) as count,
      AVG(CASE WHEN eventType = 'time-on-page' THEN json_extract(data, '$.duration') END) as avgDuration
    FROM events
    WHERE 1=1
  `;
  const params = [];

  if (userId) {
    query += ' AND userId = ?';
    params.push(userId);
  }
  if (sessionId) {
    query += ' AND sessionId = ?';
    params.push(sessionId);
  }
  if (page) {
    query += ' AND page = ?';
    params.push(page);
  }
  if (startDate) {
    query += ' AND timestamp >= ?';
    params.push(startDate);
  }
  if (endDate) {
    query += ' AND timestamp <= ?';
    params.push(endDate);
  }

  query += ' GROUP BY page, eventType';

  try {
    const results = await db.all(query, params);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => console.log('Backend running on port 3001'));