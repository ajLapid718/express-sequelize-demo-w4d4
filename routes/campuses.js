// This will be where the Express routes for API endpoints specific to campuses will be held;
// This is also where we'll be using Sequelize models imported from other files to read and write to the database;

const router = require('express').Router();
const { Campus, Student } = require("../database/models");

router.get("/", (req, res, next) => {
  Campus.findAll({ include: [Student] })
    .then(campuses => res.status(200).json(campuses))
    .catch(err => next(err));
})

module.exports = router;