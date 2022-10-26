'use strict';
const db = require("../database/models")

class CartService {
    getCart(){}

    async addToCart(productDId){
        try {
            const getProductPriceById = await db.ProductDetail.findOne({
                where: {id: productDId},
                attributes: ['price'],
                include: {
                    model: db.Product,
                    attributes: []
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
    removeFromCart(data){}
}

module.exports = new CartService()