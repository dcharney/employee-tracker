const inquirer = require('inquirer');
const prompts = require('../lib/user-prompts');
const { viewDepartments, addDepartment } = require('./departments');
const { viewEmployees, addEmployee, updateEmployeeRole } = require('./employees');
const { viewRoles, addRole } = require('./roles');

init = () => {
    console.log(`
    ███████ ███    ███ ██████  ██       ██████  ██    ██ ███████ ███████ 
    ██      ████  ████ ██   ██ ██      ██    ██  ██  ██  ██      ██      
    █████   ██ ████ ██ ██████  ██      ██    ██   ████   █████   █████   
    ██      ██  ██  ██ ██      ██      ██    ██    ██    ██      ██      
    ███████ ██      ██ ██      ███████  ██████     ██    ███████ ███████ 
                                                                         
                                                                         
    ███    ███  █████  ███    ██  █████   ██████  ███████ ██████         
    ████  ████ ██   ██ ████   ██ ██   ██ ██       ██      ██   ██        
    ██ ████ ██ ███████ ██ ██  ██ ███████ ██   ███ █████   ██████         
    ██  ██  ██ ██   ██ ██  ██ ██ ██   ██ ██    ██ ██      ██   ██        
    ██      ██ ██   ██ ██   ████ ██   ██  ██████  ███████ ██   ██        
                                                                         
~~~*~~~*~~~*~~~*~~~*~~~*~~~*~~~*~~~*~~~*~~~*~~~*~~~*~~~*~~~*~~~*~~~*~~~*~~~                                                                         
    `)
    index();
};

index = () => {
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

module.exports = init;