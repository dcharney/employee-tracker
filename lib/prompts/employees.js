const addPrompts = (roleArr,employeeArr) => {
    return [{
            type: 'input',
            name: 'first_name',
            message: `New employee's first name: `,
            validate: first_name => {
                if (first_name) {
                    return true;
                } else {
                    console.log('Please enter a name.');
                }
            }
        },
        {
            type: 'input',
            name: 'last_name',
            message: `New employee's last name: `,
            validate: last_name => {
                if (last_name) {
                    return true;
                } else {
                    console.log('Please enter a name.');
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            choices: roleArr,
            message: `New employee's role: `
        },
        {
            type: 'list',
            name: 'manager',
            choices: employeeArr,
            message: `New employee's manager: `
        }
    ];
};

const removePrompts = arr => {
    return {
            type: 'list',
            name: 'employee',
            choices: arr,
            message: 'Which employee would you like to remove? '
        };
};

const updatePrompts = (employeeArr,roleArr) => {
    return [
        {
            type: 'list',
            name: 'employee',
            choices: employeeArr,
            message: 'Which employee would you like to update? '
        },
        {
            type: 'list',
            name: 'role',
            choices: roleArr,
            message: 'What is their new role? '
        }
    ];
};

module.exports = { addPrompts, removePrompts, updatePrompts };