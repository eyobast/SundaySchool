// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var mysql = require('mysql');
var Sequelize = require("sequelize");
var sequelize;

// Creates mySQL connection using Sequelize

if (process.env.JAWSDB_URL) {
	sequelize = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	var sequelize = new Sequelize("sunday", "root", "", {
	  host: "localhost",
	  dialect: "mysql",
	  pool: {
	    max: 5,
	    min: 0,
	    idle: 10000
	  }
	});
};

// Exports the connection for other files to use
module.exports = sequelize;
