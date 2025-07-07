var express = require('express');
var router = express.Router();
var usersRouter = require('./users');
var getHomepageController = require('../controllers/getHomePage');
var questionsRouter = require('./questions');
var categoryRouter = require('./category');

router.get('/home-page', getHomepageController);
router.use('/questions', questionsRouter);
router.use('/category', categoryRouter);


module.exports = router;
