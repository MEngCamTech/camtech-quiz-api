require('module-alias/register');

const express = require('express');
const router = express.Router();

const registerController = require("@controllers/auth/register")
const resetPasswordController = require("@controllers/auth/resetPassword")
const loginController = require("@controllers/auth/login")
const sendOtpController = require("@controllers/auth/sendOtp")

router.post('/register',  registerController);
router.post('/password/reset',  resetPasswordController );
router.post('/login',  loginController);
router.post('/otp/send',  sendOtpController);

 module.exports = router;