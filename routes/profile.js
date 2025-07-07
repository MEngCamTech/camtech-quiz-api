var express = require('express');
var router = express.Router();

var getInfoController = require("../controllers/profile/getInfo")
var updateInfoController = require("../controllers/profile/updateInfo")
var changePasswordController = require("../controllers/profile/changePassword")

/* GET users listing. */
router.get('/info',  getInfoController);
router.post('/info/update',  updateInfoController);
router.post('/password/change',  changePasswordController);
 

module.exports = router;
