const cTable = require('console.table');
const pool = require('./pool');
const menu = require('../../test');

async function dbquery(sql, params, msg) {
    let res = await pool.query(sql, params);
    if (msg) {console.log(msg)}
    else {console.table(res)};
    //quit();
    menu();
};

const quit = () => {
    pool.end();
    console.log('Thank you, goodbye.');
};

module.exports = { dbquery, quit };