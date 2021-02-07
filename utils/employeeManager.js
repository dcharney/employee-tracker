const inquirer = require('inquirer');
const { prompts, intro } = require('../lib/user-prompts');

const menu = () => {
    inquirer
        .prompt(prompts)
            .then(res => {
                switch (res.action) {
                    case 'View All Departments':
                        viewDepartments();
                        break;
                    case 'View All Roles':
                        viewRoles();
                        break;
                    case 'View All Employees':
                        viewEmployees();
                        break;
                    case 'Add Department':
                        addDepartment();
                        break;
                    case 'Add Role':
                        addRole();
                        break;
                    case 'Add Employee':
                        addEmployee();
                        break;
                    case 'Update Employee Role':
                        updateEmployeeRole();
                        break;
                    case 'Quit':
                        quit();
                        break;
                };
            });
};

const init = () => {
    console.log(intro);
    menu();
}

module.exports = { menu, init };
const { viewDepartments, addDepartment } = require('./departments');
const { viewEmployees, addEmployee, updateEmployeeRole } = require('./employees');
const { viewRoles, addRole } = require('./roles');
const { quit } = require('./dpquery');