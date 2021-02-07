DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;
USE employeeDB;
CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(30) NOT NULL,
    department_id INT,
    CONSTRAINT fk_department FOREIGN KEY (department_id) 
        REFERENCES departments(id)
        ON DELETE SET NULL,
    PRIMARY KEY (id)
);
CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT(30) UNSIGNED NULL,
    CONSTRAINT fk_role FOREIGN KEY (role_id) 
        REFERENCES roles(id) 
        ON DELETE SET NULL,
    PRIMARY KEY (id)
);