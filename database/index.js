// This is where we'll import our database singleton, run and execute all model definitions and associations, and then we'll export this post-modified database to be used in our main application file;

const db = require('./db');

/* TODO: require in all models and associations; */

module.exports = db;