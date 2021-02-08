const inquirer = require("inquirer");
const { question } = require('../lib/prompts/menu');

const menu = () => {
    return inquirer.prompt(question).then(res => {
        switch (res.action) {
            case 'View All Departments':
                viewDepartments();
                break;
            case 'View All Roles':
                viewRoles();
                break;
            case 'Add a Department':
                addDepartment();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'Remove a Department':
                removeDepartment();
                break;
            case 'Remove a Role':
                removeRole();
                break;
            case 'View Raw':
                viewRaw();
                break;
            case 'Quit':
                quit();
                break;
        };
    });
};

module.exports = menu;
const { quit, viewRaw } = require('./dbquery/index');
const { viewDepartments, addDepartment, removeDepartment } = require('./departments');
const { viewRoles, addRole, removeRole } = require('./roles');