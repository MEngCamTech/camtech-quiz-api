var express = require('express');
var router = express.Router();
var usersRouter = require('./users');
var questionsRouter = require('./questions');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CamTech General Knoweledge Assessment Test' });
});

router.use('/users',usersRouter);
router.use('/questions',questionsRouter);


module.exports = router;
