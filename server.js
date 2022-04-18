// require express
const express = require('express');

// create PORT variable, flexible for deployment environment
const PORT = process.env.PORT || 3001;
// store express instance in app
const app = express();

app.listen(PORT, () => {
    // log success message to console
    console.log(`API server running on ${PORT}`);
});