// require Router() from express
const router = require('express').Router();
// require apiRoutes from './api'
const apiRoutes = require('./api');
// prefix routes with `/api`
router.use('/api', apiRoutes);
// error response

// export router for use in other files
module.exports = router;

