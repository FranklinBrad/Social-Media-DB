const router = require('express').Router();
const userRoutes = require('./user.api.routes.js');
const thoughtRoutes = require('./thought.api.routes.js');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutesRoutes);

module.exports = router;
