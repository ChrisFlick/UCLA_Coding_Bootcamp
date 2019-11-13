// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring mysql package
var mysql = require("mysql");

const Sequelize = require("sequelize")

const password = require('../../secrets')

// Setting up our connection information
var sequelize = new Sequelize("sequelize_starwars", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  password: password,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});


// // Creating our connection
// var connection = mysql.createConnection(source.localhost);


// // Connecting to the database.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// Exporting our connection
module.exports = sequelize;

