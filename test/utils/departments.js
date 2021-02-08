const inquirer = require('inquirer');
const { dbquery } = require('./dbquery/index');
const sql = require('../lib/sql');
const { addPrompts, removePrompts } = require('../lib/prompts/departments');
const getData = require('./dbquery/responses');

const viewDepartments = () => {
    dbquery(sql.departments.view, false, false);
};

const addDepartment = () => {
    inquirer.prompt(addPrompts).then(res => {
            let msg = `${res.department} has been added.`;
            dbquery(sql.departments.add, res.department, msg);
        });
};

const removeDepartment = () => {
    getData('departments').then(res => {
        return inquirer.prompt(removePrompts(res))
    })
    .then(res => {
            let msg = `${res.department} has been removed.`;
            dbquery(sql.departments.remove, res.department, msg);
        });
};

module.exports = { viewDepartments, addDepartment, removeDepartment };