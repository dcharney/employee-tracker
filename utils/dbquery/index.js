const cTable = require('console.table');
const pool = require('./pool');
const menu = require('../menu');

async function dbquery(sql, params, msg) {
    let res = await pool.query(sql, params);
    if (msg) {console.log(msg)}
    else {console.table(res)};
    menu();
};

const quit = () => {
    pool.end();
    console.log('Thank you, goodbye.');
};

// for test purposes
const viewRaw = () => {
//    dbquery(`SELECT * FROM departments;`);
    dbquery(`SELECT * FROM roles;`);
//    dbquery(`SELECT * FROM employees;`);
}

module.exports = { dbquery, quit, viewRaw };