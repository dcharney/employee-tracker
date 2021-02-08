const inquirer = require("inquirer");
const { question } = require('./lib/prompts/menu');

const menu = () => {
    return inquirer.prompt(question).then(res => {
        switch (res.action) {
            case 'View All Departments':
                viewDepartments();
                break;
            case 'Add a Department':
                addDepartment();
                break;
            case 'Remove a Department':
                removeDepartment();
                break;
            case 'Quit':
                quit();
                break;
        };
    });
};


module.exports = menu;
const { quit } = require('./utils/dbquery');
const { viewDepartments, addDepartment, removeDepartment } = require('./utils/departments');