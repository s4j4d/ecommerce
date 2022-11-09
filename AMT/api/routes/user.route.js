'use strict';
const express = require("express");
const router = express.Router();
const { userController } = require("../../controllers");

router.route("/")
    .get(userController.getUserProfile)


module.exports = router;