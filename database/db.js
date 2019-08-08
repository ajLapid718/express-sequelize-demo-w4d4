// Here, we can instantiate our connection to an already established database and use Sequelize as well;
// NOTE: Make sure that you have a database already created on your local machine*** at this point/by the time of this commit;
// This requires installing postgreSQL, our RDBMS;

// You can do this either via Postico on Mac or with the PSQL Shell;

/*

Server [localhost]: localhost
Database [postgres]: postgres
Port [5432]: 5432
Username [postgres]: postgres
Password for user postgres: <yourpasswordhere>

type in the terminal/psql shell: \l to list all databases in for the user titled "postgres" in your RDBMS;

type in the terminal/psql shell: CREATE DATABASE "w4d4-demo"; (the semicolon is important, it denotes the ending of a SQL statement to execute)

type in the terminal: \l to list all the databases (you should see the new database that you made)

*/

const Sequelize = require('sequelize');
const databaseName = "w4d4-demo";

console.log('Opening database connection');

const db = new Sequelize(`postgres://localhost:5432/${databaseName}`, { logging: false });

// Export our singleton connection to our local database, which will be modified with models;
module.exports = db;