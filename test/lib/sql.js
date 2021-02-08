module.exports = {
    departments: {
        view: `
SELECT d.id, d.name as department
FROM departments AS d;`,
        add: `
INSERT INTO departments ( name ) VALUES (?);`,
        remove: `
DELETE FROM departments WHERE name = ?`
    },
    roles: {
        view: `
SELECT r.id, r.title AS 'Job Title', d.name AS 'Department', r.salary
FROM roles AS r
    LEFT JOIN departments AS d ON r.department_id = d.id;`,
        add: `
INSERT INTO roles ( title, salary, department_id ) 
    VALUES ( ?, ?, ?);`,
    remove: `
DELETE FROM roles WHERE title = ?`
    },
    employees: {
        view: `
SELECT 
    e1.id, 
    concat(e1.first_name, ' ', e1.last_name) as name,
    r.title, 
    d.name as department, 
    r.salary, 
    concat(e2.first_name, ' ', e2.last_name) as manager
    FROM employees AS e1
        LEFT JOIN roles AS r ON e1.role_id = r.id
        LEFT JOIN departments AS d ON r.department_id = d.id
        LEFT JOIN employees AS e2 ON e1.manager_id = e2.id;`,
        add: `
INSERT INTO employees ( first_name, last_name, role_id, manager_id)
VALUES ('Delaney', 'Charney', 4, NULL);`,
        update: `
UPDATE employees SET role_id = 3
WHERE id = 8;`
                }
};