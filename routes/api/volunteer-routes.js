// require router from express
const router = require('express').Router();
// require data file
const { volunteers } = require('../../data/volunteers.json');

// CRUD operations

// get all volunteers at /api/volunteers endpoint
router.get('/', (req, res) => {
    res.json(volunteers);
});

// export router
module.exports = router;