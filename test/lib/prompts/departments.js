const addPrompts = [
    {
        type: 'input',
        name: 'department',
        message: 'New department name: ',
        validate: department => {
            if (department) {
                return true;
            } else {
                console.log('Please enter a title for department.');
            }
        }
    }
];

const removePrompts = arr => {
    return {
            type: 'list',
            name: 'department',
            choices: arr,
            message: 'Which department would you like to remove? ',
            validate: department => {
                if (department) {
                    return true;
                } else {
                    console.log('Please enter a title for department.');
                }
            }
        };
};

module.exports = { addPrompts, removePrompts };