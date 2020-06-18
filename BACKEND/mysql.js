const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit : 1000,
  host : 'mysql669.umbler.com',
  database: 'personal_beauty',
  port: 41890,
  user     : 'sql-pb-admin',
  password : 'personalbeauty',
  });

  exports.pool = pool;