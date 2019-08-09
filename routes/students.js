const router = require('express').Router();
const { Student } = require("../database/models");

router.get("/", (req, res, next) => {
  Student.findAll()
    .then(students => res.status(200).json(students))
    .catch(err => next(err));
})

module.exports = router;