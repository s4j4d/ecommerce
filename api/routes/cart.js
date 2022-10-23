'use strict';
const express = require("express");
const { cartController , cart, cartDetail} = require("../../controllers");
const router = express.Router();

/* Cart Routes */
// router.all('/', cartController.cartDetail);

// router.post("/", cartControllerAPI.cartDetail)
// router.post("/", cartController.addToCart)
router.post("/", cart.cartDetail)

console.log(cart);
console.log(cart.cartDetail);
// console.log(cartControllerAPI.cartDetail);
// console.log(cartController.addToCart);


module.exports = router;