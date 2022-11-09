'use strict';
const db = require("../database/models")

class CartService {
    async getCart(productDId) {
        try {
            //for
            const getProductPriceById = await db.Product.findOne({
                where: { id: productDId },
                include: {
                    model: db.ProductDetail,
                }
            })
            if (!getProductPriceById) {
                // throw new Error("product not find")
                return false
            }
            return getProductPriceById
        } catch (error) {
            return error
        }
    }

    addToCart(productDId) {

    }
    removeFromCart(data) { }
}

module.exports = new CartService()