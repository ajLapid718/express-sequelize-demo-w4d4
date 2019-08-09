const router = require('express').Router();
const { Campus, Student } = require("../database/models");

router.get("/", (req, res, next) => {
  Campus.findAll({ include: [Student] })
    .then(campuses => res.status(200).json(campuses))
    .catch(err => next(err));
})

module.exports = router;