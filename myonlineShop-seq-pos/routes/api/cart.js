'use strict';
const express = require("express");
const { cartController , cart, addToCart} = require("../../controllers");
const router = express.Router();

/* Cart Routes */
// router.all('/', cartController.cartDetail);

// router.post("/", cartControllerAPI.cartDetail)
// router.post("/", cartController.addToCart)

console.log(cart);
console.log(addToCart);
// console.log(cartControllerAPI.cartDetail);
// console.log(cartController.addToCart);


module.exports = router;