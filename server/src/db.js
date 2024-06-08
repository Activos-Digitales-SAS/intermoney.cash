const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10, // Número máximo de conexiones en el pool
  host: 'srv1180.hstgr.io',
  user: 'u491711087_intermoney7777',
  password: '^2qYQh3]]ZfB',
  database: 'u491711087_intermoney'
});

module.exports = pool;
