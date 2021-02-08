const inquirer = require('inquirer');
const { dbquery } = require('./dbquery/index');
const sql = require('../lib/sql');
const { addPrompts, removePrompts, updatePrompts } = require('../lib/prompts/employees');
const { getData, getID } = require('./dbquery/responses');

const viewEmployees = () => {
    dbquery(sql.employees.view, false, false);
};

const addEmployee = () => {
    let newEmployee = {};
    let roleArr = [];
    let employeeArr = [];
    getData('roles','title')
        .then(res => {
            roleArr = res;
            return roleArr
        })
        .then(res => {return getData('employees','first_name','last_name')})
        .then(res => {
            for (i in res.arr) {
                employeeArr.push((res.arr[i]).concat(' ',res.arr2[i]));
            }
            employeeArr.unshift('N/A');
            return inquirer.prompt(addPrompts(roleArr,employeeArr))
        })
        .then(res => {
            newEmployee = res;
            return getID('roles','title', newEmployee.role);
        })
        .then(res => {
            newEmployee.role_id = res.ID;
            // manager name is in string as 'first_name last_name'
            let manager = newEmployee.manager.split(' ');
            return getID('employees','first_name', manager[0], 'last_name', manager[1]);
        })
        .then(res => {
            if (res == undefined) {newEmployee.manager_id = null} else {newEmployee.manager_id = res.ID};
            let msg = `${(newEmployee.first_name).concat(' ', newEmployee.last_name)} has been added.`;
            params = [ 
                newEmployee.first_name, 
                newEmployee.last_name, 
                newEmployee.role_id,
                newEmployee.manager_id
            ];
            console.log(params);
            dbquery(sql.employees.add, params, msg);
        });
};

const removeEmployee = () => {
    let employeeArr = [];
    getData('employees','first_name','last_name')
        .then(res => {
            for (i in res.arr) {
                employeeArr.push((res.arr[i]).concat(' ',res.arr2[i]));
            }
            return inquirer.prompt(removePrompts(employeeArr))
        })
        .then(res => {
            let employee = res.employee.split(' ');
            let msg = `${res.employee} has been removed.`;
            dbquery(sql.employees.remove, employee, msg);
        });
};

const updateEmployee = () => {
    let employeeArr = [];
    let roleArr = [];
    let params;
    getData('employees','first_name','last_name')
        .then(res => {
            for (i in res.arr) {
                employeeArr.push((res.arr[i]).concat(' ',res.arr2[i]));
            }
            return getData('roles','title')
        })
        .then(res => {
            roleArr = res;
            return inquirer.prompt(updatePrompts(employeeArr, roleArr))
        })
        .then(res => {
            params = res.employee.split(' ');
            return getID('roles','title',res.role)
        })
        .then(res => {
            let msg = `${(params[0]).concat(' ', params[1])}'s role has been updated.`;
            params.unshift(res.ID);
            console.log(params);
            dbquery(sql.employees.update, params, msg);
        });
};

module.exports = { viewEmployees, addEmployee, removeEmployee, updateEmployee };