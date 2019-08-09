const express = require('express');
const app = express();

const db = require('./database');
const apiRouter = require("./routes");

async function syncDatabase() {
  await db.sync({ force: true });
}

function configureApp() {
  app.use("/api", apiRouter);

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