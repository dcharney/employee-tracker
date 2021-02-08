const mysql = require('mysql2/promise');
const cTable = require('console.table');


const config = {
    host: 'localhost',
    port:3306,
    user: 'root',
    password: 'admin',
    database: 'employeeDB'
};

async function dbquery(sql, params, msg) {
    let connection = await mysql.createConnection(config);

    let [rows, fields] = await connection.execute(sql);

    if (msg) { console.log(msg) }
    else { console.table(rows) }; 

    menu();
};

async function quit() {
    let connection = await mysql.createConnection(config);
    connection.end();
};

async function getDepartments() {
    let departmentsArr = [];
    let sql = `SELECT * from departments`;

    let connection = await mysql.createConnection(config);
    let [rows, fields] = await connection.execute(sql);

    rows.forEach(row => {
        departmentsArr.push({
            id: row.id,
            name: row.name
        });
    });

    return departmentsArr;
};

module.exports = { dbquery, quit, getDepartments };
const { menu } = require('../index');