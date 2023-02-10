/*************************************************
* 
* The purpose of this file is to combine all of your 
* routes into a single router
*
**************************************************/

const router = require('express').Router();

const apiRoutes = require('./api');
const authRoutes = require('./auth')
const viewRoutes = require('./viewRoutes');

router.use('/api', apiRoutes);
router.use('/auth', authRoutes)
router.use('/', viewRoutes)

module.exports = router;
