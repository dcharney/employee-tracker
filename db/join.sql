/* view all departments */
SELECT d.id, d.name as department
FROM departments AS d;
/* view all roles */
SELECT r.id, r.title AS 'Job Title', d.name AS 'Department', r.salary
FROM roles AS r
    LEFT JOIN departments AS d ON r.department_id = d.id;
/* view all employees */
SELECT e1.id, e1.first_name, e1.last_name, r.title, d.name as department, r.salary, concat(e2.first_name, ' ', e2.last_name) as manager
FROM employees AS e1
    LEFT JOIN roles AS r ON e1.role_id = r.id
    LEFT JOIN departments AS d ON r.department_id = d.id
    LEFT JOIN employees AS e2 ON e1.manager_id = e2.id; 
/* add a department */
INSERT INTO departments ( name ) VALUES ('IT');
SELECT * FROM departments;
/* add a role */
INSERT INTO roles ( title, salary, department_id ) 
VALUES ( 'IT Consultant', 50000, 5);
SELECT * FROM roles;
/* add an employee */
INSERT INTO employees ( first_name, last_name, role_id, manager_id)
VALUES ('Delaney', 'Charney', 4, NULL);
SELECT * FROM employees;
/* update an employee role */
UPDATE employees SET role_id = 3
WHERE id = 8;
SELECT * FROM employees;
/* Testing getting id from name  */
SELECT ID FROM departments WHERE name = Sales;