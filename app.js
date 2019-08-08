// This will be where we set up our Express application, middleware and modules and all;

const express = require('express');
const app = express();

const db = require('./database');
const apiRouter = require("./routes");

db.sync();
app.use("/api", apiRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000!!!");
})