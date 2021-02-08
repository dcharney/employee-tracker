const inquirer = require('inquirer');
const pool = require('./pool');

async function getData(db,col) {
    let arr = [];
    let sql = `SELECT * from ${db}`;
    let res = await pool.query(sql);
    res.forEach(row => {
        arr.push(/*{
            id: row.id,
            name: row.name
        }*/
        row[col]);
    });
    return arr;
};

async function getID(db,col,val) {
    let sql = `SELECT ID FROM ${db} WHERE ${col} = '${val}'`;
    let [row, field] = await pool.query(sql);
    return row;
};

module.exports = { getData, getID };

