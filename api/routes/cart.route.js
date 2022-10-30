'use strict';
const express = require("express");
const router = express.Router();
const { cartController } = require("../../controllers");

router.route("/")
    .get(cartController.getCart)
    .post(cartController.addToCart)
    .delete(cartController.removeFromCart)


router.route("/log")
    .get(cartController.getCart)
    .post(cartController.addToCartAfterLogin)

module.exports = router;