var express = require('express');
var router = express.Router();

var authenticate = require('@controllers/auth/authenticate');

var usersRouter = require('./users');
var getHomepageController = require('../controllers/getHome');
var questionsRouter = require('./questions');
var categoryRouter = require('./category');
var profileRouter = require('./profile');
var authRouter = require('./auth');


router.use('/auth', authRouter);
router.get('/home', authenticate,  getHomepageController);

router.use('/questions',authenticate ,  questionsRouter);
router.use('/category', authenticate, categoryRouter);
router.use('/profile', authenticate, profileRouter);


module.exports = router;
