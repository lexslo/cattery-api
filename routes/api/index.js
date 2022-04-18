// require Router() from express
const router = require('express').Router();
// require specific routes files
const catRoutes = require('./cat-routes');
const volRoutes = require('./volunteer-routes');

// add correct url prefixes to routes
router.use('/cats', catRoutes);
router.use('/volunteers', volRoutes);

// export router
module.exports = router;