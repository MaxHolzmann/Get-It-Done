/*************************************************
* 
* The purpose of this file is to combine all of your 
* routes into a single router
*
**************************************************/

const router = require('express').Router();

const apiRoutes = require('./api');
const authRoutes = require('./auth')

router.use('/api', apiRoutes);
router.use('/auth', authRoutes)

module.exports = router;
