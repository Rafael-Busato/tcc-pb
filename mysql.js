const mysql = require('mysql');

const pool = mysql.createPool({
    server : 'mysql669.umbler.com',
    user     : 'sql-pb-admin',
    password : 'personalbeauty',
    database : 'PERSONAL_BEAUTY',
    multipleStatements: true
  });

  exports.pool = pool;