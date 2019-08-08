// This will be where we set up our Express application, middleware and modules and all;

const express = require('express');
const app = express();

const db = require('./database');
const apiRouter = require("./routes");

app.use("/api", apiRouter);

db.sync({ force: true }) // NOTE: this option of "force": true is a destructive operation --- it will drop all of your tables --- so you might need two terminals open if this is passed in --- one for running the application and one for seeding your data;
  .then(() => {
  app.listen(3000, () => {
    console.log("Listening on port 3000!!!");
  })
})