// This will be where we set up our Express application, middleware and modules and all;

const express = require('express');
const app = express();

const db = require('./database');
const apiRouter = require("./routes");

// NOTE: this option of "force": true is a destructive operation --- it will drop all of your tables --- so you might need two terminals open if this is passed in --- one for running the application and one for seeding your data;

async function syncDatabase() {
  await db.sync({ force: true });
}

function configureApp() {
  app.use("/api", apiRouter);

  // Error handling;
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found');
      err.status = 404;
      next(err);
    }
    else {
      next();
    }
  });

  // More error handling;
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });

  app.listen(3000, () => {
    console.log("Listening on port 3000!!!");
  })
}

async function bootApp() {
  await syncDatabase();
  await configureApp();
}

bootApp();