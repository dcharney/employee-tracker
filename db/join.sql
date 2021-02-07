SELECT e1.id, e1.first_name, e1.last_name, r.title, d.name as department, r.salary, concat(e2.first_name, ' ', e2.last_name) as manager
FROM employees AS e1
    LEFT JOIN roles AS r ON e1.role_id = r.id
    LEFT JOIN departments AS d ON r.department_id = d.id
    LEFT JOIN employees AS e2 ON e1.manager_id = e2.id; 

