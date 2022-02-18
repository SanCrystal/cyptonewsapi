const { getAllNews } = require('../dbControllers/controller');

//require express router
const router = require('express').Router();

//get all news route
router.get('/', getAllNews);

module.exports = router;