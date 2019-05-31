const express = require('express');
const app = express();
// Import cors - Access to fetch in the frontend (server-client)
const cors = require('cors');

const routes = require('./routes');
const db = require('../models');



// Set port to 5000 inside PORT variable
const PORT = process.env.PORT || 5000;


// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());
// Initialize cors - Settings for routes
app.use(cors());
// This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
  req.models = db.models;
  next();
});

// When the page start, redirect to routes folder
app.use('/', routes);

// Start up the database, afterwards, start the server and listen to requests
db.connectDb().then(() => {
  // Set PORT app.listen
  const listener = app.listen(PORT, () => {
    // Controls that the port is set correct
    console.info(`Server is listening on port ${listener.address().port}...`);
  });
});
// Set PORT 5000
