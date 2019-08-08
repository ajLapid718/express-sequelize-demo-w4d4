// This will be where the Express routes for API endpoints specific to campuses will be held;
// This is also where we'll be using Sequelize models imported from other files to read and write to the database;

const router = require('express').Router();

router.get("/", (req, res, next) => {
  res.send("these are all the campuses!!!");
})

module.exports = router;