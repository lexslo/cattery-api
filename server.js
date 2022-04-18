// require express
const express = require('express');
// require routes
const routes = require('./routes');

// define PORT
const PORT = process.env.PORT || 3001;
// assign express() to app
const app = express();

// set up middleware functions
// parse incoming data, look out for nested arrays
app.use(express.urlencoded({ extended: true }));
// take incoming POST data as JSON and parse it into the req.body object
app.use(express.json());
// use routes
app.use(routes);

// listen on port
app.listen(PORT, () => {
    console.log(`API server running on ${PORT}`);
});