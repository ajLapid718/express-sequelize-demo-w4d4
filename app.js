// This will be where we set up our Express application, middleware and modules and all;

const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log("Listening on port 3000!!!");
})