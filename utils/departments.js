const { dbquery } = require('./dbquery');
const sql = require('../lib/sql-prompts');


viewDepartments = () => {
    dbquery(sql.departments.view, false, false);
};
addDepartment = title => {
    let msg = `${title} has been added to db`;
    dbquery(sql.departments.add, title, msg);
};
deleteDepartment = title => {
    let msg = `${title} has been removed from db`;
    dbquery(sql.departments.remove, title, msg);
};

module.exports = { viewDepartments, addDepartment, deleteDepartment };