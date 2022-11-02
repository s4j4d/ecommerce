'use strict';
const express = require("express");
const router = express.Router();
const { userController } = require("../../controllers");
const { urlencoded } = require('express')
const { Authentication } = require('../middlewares')

router.route("/profile")
    .get(userController.getUserProfile)

router.use(urlencoded())
router.get('/', userController.loginRegister)
// router.get('/confirmation', userController.phoneAuthentication)
// router.get('/confirmation' ,Authentication.tokenVerify)
// router.get('/confirmation' ,Authentication.phoneAuthentication)???

module.exports = router;