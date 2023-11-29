const router = require('express').Router();
const userRoutes = require('./user.api.routes');
const thoughtRoutes = require('./thought.api.routes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;