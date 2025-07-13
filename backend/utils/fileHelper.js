const fs = require('fs');
const path = require('path');

const LOG_FILE = path.join(__dirname, '../data/logs.json');

// Helper to read logs
function readLogs() {
  if (!fs.existsSync(LOG_FILE)) {
    fs.writeFileSync(LOG_FILE, '[]');
  }
  const data = fs.readFileSync(LOG_FILE, 'utf-8');
  return JSON.parse(data || '[]');
}

// Helper to write logs
function writeLogs(logs) {
  fs.writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2));
}

// Append a log entry
function appendLog(log) {
  const logs = readLogs();
  logs.push(log);
  writeLogs(logs);
}

module.exports = { readLogs, writeLogs, appendLog };
