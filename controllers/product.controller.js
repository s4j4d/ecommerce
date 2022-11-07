'use strict';
const { productService } = require('../services');

class ProductController {

    async addCategory(req, res) {
        const category = req.body.category
        try {
            const createdCategory = await productService.addCategory(category)
            return res.status(200).send(createdCategory)
        } catch (error) {
            return res.status(404).send({
                status: 'error',
                message: error.message
            })
        }
    }

    async modifyCategory(req, res) {
        const category = req.body.category
        try {
            const createdCategory = await productService.modifyCategory(category)
            return res.status(200).send(createdCategory)
        } catch (error) {
            return res.status(404).send({
                status: 'error',
                message: error.message
            })
        }
    }

    async removeCategory(req, res) {
        const category = req.body.category
        try {
            const deletedCategory = await productService.removeCategory(category.id)
            return res.status(200).send({ message: "successfully delete" })
        } catch (error) {
            return res.status(404).send({
                status: 'error',
                message: "couldn't delete category!"
            })
        }
    }
    async getAllCategories(req, res) {
        try {
            const category = await productService.getAllCategories()
            return res.status(200).send(category)
        } catch (error) {
            return res.status(404).send({
                status: 'error',
                message: error.message
            })
        }
    }

    async getSubCategory(req, res) {
        const categoryId = req.params.categoryId
        const subCat = await productService.getSubCategory(categoryId)
        return res.status(200).send(subCat)
    }

    async getCategoryLevel(req, res) {
        const level = req.params.level
        const catLevel = await productService.getCategoryLevel(level)
        return res.status(200).send(catLevel)
    }



    async getShop(req, res) {
        try {
            const shop = await productService.getShop()
            return res.status(200).send(shop)
        } catch (error) {
            return res.status(404).send({
                status: 'error',
                message: "could find any product!"
            })
        }
    }

    async getProducts(req, res) {
        try {
            const categoryId = req.params.categoryId
            const products = await productService.getProducts(categoryId)
            return res.status(200).send(products)

        } catch (error) {
            return res.status(404).send({
                status: 'error',
                message: "could find any product of this category!"
            })
        }
    }

    async getProductDetails(req, res) {
        const productId = req.params.productId

        try {
            // const similarProducts = await productService.getSimmialarProduct(product.CategoryId)
            const product = await productService.findProduct(productId)
            if (!product) {
                return res.status(404).send({
                    status: 'error',
                    message: "couldn't find this product!"
                })
            } else {
                // return res.render('product.pug', { product })
                return res.status(200).send(product)
            }
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

    addProduct() { }
    updateProduct() { }
    removeProduct() { }
    addTofavorite() { }
    removeFromfavorite() { }
    compare() { }

}


module.exports = new ProductController();