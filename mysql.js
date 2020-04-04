const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'sql-pb.database.windows.net',
    user: 'sql-pb-admin',
    password: 'PersonalBeauty123',
    database: 'SQL_PERSONAL_BEAUTY', 
});

//exports.pool = pool;