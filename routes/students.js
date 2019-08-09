// This will be where the Express routes for API endpoints specific to students will be held;
// This is also where we'll be using Sequelize models imported from other files to read and write to the database;

const router = require('express').Router();
const { Student } = require("../database/models");

router.get("/", (req, res, next) => {
  Student.findAll()
    .then(students => res.status(200).json(students))
    .catch(err => next(err));
})

module.exports = router;