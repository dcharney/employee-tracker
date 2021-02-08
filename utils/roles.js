const { dbquery } = require('./dbquery');
const sql = require('../lib/sql-prompts');

viewRoles = () => {
    let msg = false;
    dbquery(sql.roles.view, [], msg);
};
addRole = () => {
    console.log('Department has been added to db');
    //dbquery(sql.roles.add, [], msg);
};

module.exports = { viewRoles, addRole };