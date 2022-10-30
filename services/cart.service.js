'use strict';
const { where, literal } = require("sequelize");
const db = require("../database/models")

class CartService {
    async getCart(items) {
        try {
            const getCartProducts = []
            for (const item of items) {
                getCartProducts.push(await db.ProductDetail.findOne({
                    where: { id: item.id },
                    include: {
                        model: db.Product,
                        attributes: ["name"]
                    },
                    attributes: ["id", "price", "color"]
                }))
            }
            if (!getCartProducts) {
                // throw new Error("product not find")
                return false
            }
            return getCartProducts
        } catch (error) {
            return error.message
        }
    }

    addToCart(productDId) {

    }
    async addToCartAfterLogin(user_id, product_id) {
        const cart = await db.Cart.findOrCreate({ where: { UserId: user_id } })//, qty: literal(cart[0].qty + 1)
        let cart_item = await db.CartItem.findOne({ where: { CartId: cart[0].id, ProductDetailId: product_id } })
        if (!cart_item) {
            cart_item = await db.CartItem.create({ CartId: cart[0].id, ProductDetailId: product_id, qty: 0 })
        }
        cart_item.qty += 1
        await db.CartItem.update({ qty: cart_item.qty }, { where: { CartId: cart[0].id, ProductDetailId: product_id } })
        return cart_item

    }

    removeFromCart(data) { }
}

module.exports = new CartService()