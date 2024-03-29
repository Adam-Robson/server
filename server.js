const app = require('./lib/app');
const pool = require('./lib/utils/pool');
const console = require('./util/logger').console;

const API_URL = process.env.API_URL || 'http://localhost';
const PORT = process.env.PORT || 7890;
console.log(new Date().toISOString() + ' - ' + 'Server started');

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.info(`🔭 🔭 🔭 Server started on ${API_URL}:${PORT} 🔭 🔭 🔭`);
});
process.on('exit', () => {
  // eslint-disable-next-line no-console
  console.info('Goodbye!');
  pool.end();
});

