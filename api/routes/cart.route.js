'use strict';
const express = require("express");
const router = express.Router();
const { cartController } = require("../../controllers");

router.get("/", cartController.getCart)


module.exports = router;