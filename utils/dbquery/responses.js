const inquirer = require('inquirer');
const pool = require('./pool');

async function getData(db,col,col2) {
    let arr = [];
    let arr2 = [];
    let sql = `SELECT * from ${db}`;
    let res = await pool.query(sql);
    res.forEach(row => {
        arr.push(row[col]);
        if (col2) { arr2.push(row[col2]) };
    });
    if (col2) { 
        return { arr: arr, arr2: arr2 };
    } else { 
        return arr 
    };
};

async function getID(db,col,val,col2,val2) {
    let sql;
    if (col2) {
        sql = `
            SELECT ID FROM ${db} 
            WHERE ${col} = '${val}' 
            AND ${col2} = '${val2}';`
    } else {
        sql = `
            SELECT ID FROM ${db} 
            WHERE ${col} = '${val}';`
    };
    let [row, field] = await pool.query(sql);
    return row;
};

module.exports = { getData, getID };

