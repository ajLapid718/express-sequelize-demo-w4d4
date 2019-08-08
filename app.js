const express = require('express');
const app = express();

const db = require('./database');
const apiRouter = require("./routes");

app.use("/api", apiRouter);

db.sync({ force: true })
  .then(() => {
  app.listen(3000, () => {
    console.log("Listening on port 3000!!!");
  })
})