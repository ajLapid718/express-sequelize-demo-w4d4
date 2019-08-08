const Sequelize = require('sequelize');
const databaseName = "w4d4-demo";

console.log('Opening database connection');

const db = new Sequelize(`postgres://localhost:5432/${databaseName}`, { logging: false });

module.exports = db;