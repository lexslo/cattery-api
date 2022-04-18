// require express
const express = require('express');
// require routes
const routes = require('./routes');

// define PORT
const PORT = process.env.PORT || 3001;
// assign express() to app
const app = express();

// use express.json()
app.use(express.json());
// use routes
app.use(routes);

// listen on port
app.listen(PORT, () => {
    console.log(`API server running on ${PORT}`);
});