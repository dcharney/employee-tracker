const addPrompts = arr => {
    return [{
            type: 'input',
            name: 'role',
            message: 'New role name: ',
            validate: role => {
                if (role) {
                    return true;
                } else {
                    console.log('Please enter a title for role.');
                }
            }
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Salary for role: ',
            validate: salary => {
                if (salary > 0) {
                    return true;
                } else {
                    console.log('Salary must be a number greater than 0.');
                }
            }
        },
        {
            type: 'list',
            name: 'department',
            choices: arr,
            message: 'Department for role: '
        }];
};

const removePrompts = arr => {
    return {
            type: 'list',
            name: 'role',
            choices: arr,
            message: 'Which role would you like to remove? '
        };
};

module.exports = { addPrompts, removePrompts };