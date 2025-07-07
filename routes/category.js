var express = require('express');
var router = express.Router();

var listCategoryController = require("../controllers/category/listCategory")
var getategoryDetailController = require("../controllers/category/getCategory")

/* GET users listing. */
router.get('/list',  listCategoryController);
router.get('/:id/detail',  getategoryDetailController);

module.exports = router;
