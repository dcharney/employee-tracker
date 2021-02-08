const { dbquery } = require('./dbquery');
const sql = require('../lib/sql-prompts');

viewEmployees = () => {
    let msg = false;
    dbquery(sql.employees.view, [], msg);
};
addEmployee = () => {
    console.log('Department has been added to db');
    //dbquery(sql.employees.add, [], msg);
};
updateEmployeeRole = () => {
    console.log('Department has been added to db');
    //dbquery(sql.employees.update, [], msg);
}

module.exports = { viewEmployees, addEmployee, updateEmployeeRole };
