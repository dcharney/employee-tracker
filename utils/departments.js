const { dbquery } = require('./dpquery');
const sql = require('../lib/sql-prompts');
const { menu } = require('./employeeManager');

viewDepartments = () => {
    let msg = false;
    dbquery(sql.departments.view, [], msg);
};
addDepartment = () => {
    console.log('Department has been added to db');
    //dbquery(sql.departments.addDepartment, [], msg);
};

module.exports = { viewDepartments, addDepartment };