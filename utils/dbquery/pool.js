const mysql = require('mysql2');
const util = require('util');

const config = {
    host: 'localhost',
    port:3306,
    user: 'root',
    password: 'admin',
    database: 'employeeDB',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

const pool = mysql.createPool(config);

// check if connection is working
pool.getConnection((err,conn) => {
    if (err) throw err;
    if (conn) conn.release();
    return;
});

// implement promisify to make queries async
pool.query = util.promisify(pool.query);

module.exports = pool;