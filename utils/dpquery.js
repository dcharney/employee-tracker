const mysql = require('mysql2');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port:3306,
    user: 'root',
    password: 'admin',
    database: 'employeeDB'
});

const dbquery = (sql, params, msg ) => {
    connection.connect( err => {
        if (err) throw err;
    });

    connection.query( sql, params, function(err, res) {
        if (err) throw err;
        if (msg) {console.log(msg)}
        else { console.table(res)};
    });
};

module.exports = dbquery;