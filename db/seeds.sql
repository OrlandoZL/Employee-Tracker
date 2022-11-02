USE employees_db

INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Sales Lead', 90000, 1),
    ('Salesperson', 65000, 1),
    ('Lead Engineer', 145000, 2),
    ('Software Engineer', 110000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 135000, 3),
    ('Legal Team Manager', 230000, 4),
    ('Legal Team Member', 170000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Catherine', 'Powell', 1, NULL),
    ('Raphael', 'Ortiz', 2, 1),
    ('Mariam', 'Bernard', 3, 3),
    ('Kavita', 'Daly', 4, NULL),
    ('Mayson', 'Mcnally', 5, 5),
    ('Rylan', 'Chen', 6, NULL),
    ('Taylor', 'Roche', 7, 7),
    ('Nina', 'Roberts', 8, NULL);