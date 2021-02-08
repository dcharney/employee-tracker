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
        row.name);
    });
    return arr;
};

const userPrompt = arr => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'departmentRemove',
            choices: arr,
            message: 'Which department do you want to remove?'
        }
    ])

};

module.exports = getData;

//getData('departments')
//    .then(res => console.log(res));
//console.log(getData('departments'));
