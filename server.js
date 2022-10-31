const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();


//Connects to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: ''
    },
    console.log(`Connected to the  database.`)
);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
  