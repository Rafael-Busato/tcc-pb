const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit : 1000,
  connectTimeout  : 60 * 60 * 1000,
  acquireTimeout  : 60 * 60 * 1000,
  timeout         : 60 * 60 * 1000,
  host : 'mysql669.umbler.com',
  port: 41890,
  user     : 'sql-pb-admin',
  password : 'personalbeauty',
  });

  exports.pool = pool;