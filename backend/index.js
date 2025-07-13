const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { appendLog, readLogs } = require('./utils/fileHelper');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// 🔸 POST /logs - Ingest a new log
app.post('/logs', (req, res) => {
  const log = req.body;

  // Validate schema minimally
  const requiredFields = ['level', 'message', 'resourceId', 'timestamp', 'traceId', 'spanId', 'commit', 'metadata'];
  const isValid = requiredFields.every(field => field in log);

  if (!isValid) {
    return res.status(400).json({ error: 'Missing required log fields' });
  }

  try {
    appendLog(log);
    return res.status(201).json(log);
  } catch (err) {
    console.error('Failed to write log:', err);
    return res.status(500).json({ error: 'Server error while saving log' });
  }
});

// 🔸 GET /logs - Query logs with optional filters
app.get('/logs', (req, res) => {
  try {
    const logs = readLogs();
    const {
      level,
      message,
      resourceId,
      timestamp_start,
      timestamp_end,
      traceId,
      spanId,
      commit
    } = req.query;

    let filtered = logs;

    if (level) filtered = filtered.filter(log => log.level === level);
    if (message) filtered = filtered.filter(log => log.message.toLowerCase().includes(message.toLowerCase()));
    if (resourceId) filtered = filtered.filter(log => log.resourceId === resourceId);
    if (traceId) filtered = filtered.filter(log => log.traceId === traceId);
    if (spanId) filtered = filtered.filter(log => log.spanId === spanId);
    if (commit) filtered = filtered.filter(log => log.commit === commit);
    if (timestamp_start)
      filtered = filtered.filter(log => new Date(log.timestamp) >= new Date(timestamp_start));
    if (timestamp_end)
      filtered = filtered.filter(log => new Date(log.timestamp) <= new Date(timestamp_end));

    // Reverse chronological sort
    filtered.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    return res.json(filtered);
  } catch (err) {
    console.error('Error reading logs:', err);
    return res.status(500).json({ error: 'Server error while retrieving logs' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
