const { Student, Campus } = require("./database/models");

const students = [{firstName: "Allan", lastName: "Abe"}, {firstName: "Brian", lastName: "Dern"}, {firstName: "Hector", lastName: "Ruiz"}, {firstName: "Alyssa", lastName: "Rodriguez"}];

const campuses = [{name: "Hunter College"}, {name: "NYU"}];

async function populateDatabase() {
  for (let i = 0; i < students.length; i++) {
    let currentStudent = students[i];
    await Student.create(currentStudent);
  }
  
  for (let i = 0; i < campuses.length; i++) {
    let currentCampus = campuses[i];
    await Campus.create(currentCampus);
  }
}

populateDatabase();