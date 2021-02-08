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

const question = [
    {
        type: 'list',
        name: 'action',
        choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add a Department',
            'Add a Role',
            'Add an Employee',
            'Remove a Department',
            'Remove a Role',
            'Remove an Employee',
            `Update an Employee's Role`,
            //'View Raw',
            'Quit'
        ],
        message: 'What would you like to do?'
    }
];

module.exports.intro = intro;
module.exports.question = question;