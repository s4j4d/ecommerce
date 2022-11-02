'use strict';
const express = require("express");
const router = express.Router();
const { userController } = require("../../controllers");

const { urlencoded } = require('express')
const { Authentication } = require('../middlewares')

router.route("/profile")
    .get(userController.getUserProfile)

router.use(urlencoded())
router.route('/')
    .get(userController.loginRegister)

module.exports = router;