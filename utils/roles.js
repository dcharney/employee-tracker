const inquirer = require('inquirer');
const { dbquery } = require('./dbquery/index');
const sql = require('../lib/sql');
const { addPrompts, removePrompts } = require('../lib/prompts/roles');
const { getData, getID } = require('./dbquery/responses');

const viewRoles = () => {
    dbquery(sql.roles.view, false, false);
};

const addRole = () => {
    const newRole = {};
    getData('departments','name')
        .then(res => {
            return inquirer.prompt(addPrompts(res))
        })
        .then(res => {
            newRole.title = res.role;
            newRole.salary = res.salary;
            return getID('departments','name', res.department);
        })
        .then(res => {
            newRole.department_id = res.ID;
            let msg = `${newRole.title} has been added.`;
            params = [ newRole.title, newRole.salary, newRole.department_id];
            dbquery(sql.roles.add, params, msg);
        });
};

const removeRole = () => {
    getData('roles', 'title').then(res => {
        return inquirer.prompt(removePrompts(res))
    })
    .then(res => {
            let msg = `${res.role} has been removed.`;
            dbquery(sql.roles.remove, res.role, msg);
        });
};

module.exports = { viewRoles, addRole, removeRole };