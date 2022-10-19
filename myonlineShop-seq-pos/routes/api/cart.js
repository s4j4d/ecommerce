'use strict';
const express = require("express");
const { cartControllerAPI } = require("../../controllers");
const router = express.Router();

/* Cart Routes */
// router.all('/', cartController.cartDetail);

router.post("/", cartControllerAPI.cartDetail)




module.exports = router;