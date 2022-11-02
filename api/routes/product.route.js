'use strict';
const express = require("express");
const router = express.Router();
const { productController } = require("../../controllers");

// router.route("/:id")
// .get(productController.getProductDetail)

router.route("/:productId")
    .get(productController.getProduct)

module.exports = router;