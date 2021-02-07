const intro = `
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
`;

const prompts = [
    {
        type: 'list',
        name: 'action',
        choices: [
            'View All Departments', 
            'View All Roles', 
            'View All Employees', 
            'Add Department', 
            'Add Role', 
            'Add Employee', 
            'Update Employee Role',
            'Quit'],
        message: 'What would you like to do?'
    },
    {
        type: 'input',
        name: 'department',
        message: 'New department name: ',
        when: answers => answers.action === 'Add Department',
        validate: department => {
            if (department) {
                return true;
            } else {
                console.log('Please enter a title for department.');
            }
        }
    },
    {
        type: 'input',
        name: 'role',
        message: 'Name of new role: ',
        when: answers => answers.action === 'Add Role',
        validate: role => {
            if (role) {
                return true;
            } else {
                console.log('Please enter a title for role.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'salary',
        message: 'Salary associated with new role: ',
        when: answers => answers.role,
        validate: salary => {
            if (salary > 0) {
                return true;
            } else {
                console.log('Invalid salary input. Please enter a value greater than 0.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'role-department',
        choices: ['option a', 'option b'],
        message: 'New roles department: ',
        when: answers => answers.salary
    }
];

module.exports = { prompts, intro };