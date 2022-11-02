const inquirer = require('inquirer');
const mysql = require('mysql2');
require("console.table");

const PORT = process.env.PORT || 3001;

//Connects to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);

db.connect(function (err) {
  if(err) throw err;
  questionsPrompt();
});

function questionsPrompt() {
  inquirer.prompt({
    type: "list",
    name: "options",
    message: "Pick an option below!",
    choices: [
      "View all employees",
      "View all roles",
      "View all departments",
      "Add an employee",
      "Add a role",
      "Add a department",
      "Cancel"
    ]
  })
  .then((response) => {
    const {choices} = response;

    if (choices === "View all employees") {
      displayEmployees();
    }

    if (choices === "View all roles") {
      displayRoles();
    }

    if (choices === "View all departments") {
      displayDepartments();
    }

    if (choices === "Add an employee") {
      addEmployee();
    }

    if (choices === "Add a role") {
      addRole();
    }

    if (choices === "Add a department") {
      addDepartment();
    }

    if (choices === "Cancel") {
      db.end()
    };
  });
};

function displayEmployees () {
  console.log("Displaying all employees \n");
  
}