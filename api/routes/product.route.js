'use strict';
const express = require("express");
const router = express.Router();
const { productController } = require("../../controllers");


router.route("/")
    .get(productController.getShop)

router.route("/category")
    .get(productController.getAllCategories)
    .post(productController.addCategory)
    .put(productController.modifyCategory)
    .delete(productController.removeCategory)


router.route("/category/:categoryId")
    .get(productController.getSubCategory)

router.route("/category-level/:level")
    .get(productController.getCategoryLevel)

router.route("/:categoryId")
    .get(productController.getProducts)

router.route("/:categoryId/:productId")
    .get(productController.getProductDetails)

module.exports = router;