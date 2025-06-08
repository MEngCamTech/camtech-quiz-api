var express = require('express');
var router = express.Router();

var listQuestionController = require("../controllers/questions/listQuestion")


/* GET users listing. */
router.get('/list',  listQuestionController);

module.exports = router;
