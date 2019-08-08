// This is where we'll set up our apiRouter that will handle all of our different API endpoints;

const router = require('express').Router();

const campusesRouter = require("./campuses");
const studentsRouter = require("./students");

router.use("/campuses", campusesRouter);
router.use("/students", studentsRouter);

module.exports = router;