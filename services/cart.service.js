'use strict';
const db = require("../database/models")

const { v4: uuidv4 } = require('uuid');

class CartService {

    // /* Gets Unique Cart Id */
    // uniqueCartId(request) {
    //     if (request.session.uniqueCartId) {
    //         return request.session.uniqueCartId;
    //     } else {
    //         request.session.uniqueCartId = this.generateUniqueId();
    //         return request.session.uniqueCartId;
    //     }
    // };
    // /* Generate Unique Id */
    // generateUniqueId() {
    //     var uiid = BigInt("0x" + uuidv4().replace(/-/g, ""));
    //     var decimal = Math.floor(value.toString() / (10 ** 30));
    //     return decimal;
    // };

    getCart(request) {
        /* Get Cart */
        // var uniqueId = this.uniqueCartId(request);
        // console.log("*************uniqueId***********", uniqueId);
        // var cart = db.Cart.findOrCreate({ where: { id: uniqueId } });
        // return cart;


        if (!request.session.uniqueCartId) {
            request.session.uniqueCartId = Math.floor(BigInt("0x" + uuidv4().replace(/-/g, "")).toString() / (10 ** 30));    // /* Generate Unique Id */
        }
        var cart = db.Cart.findOrCreate({ where: { id: request.session.uniqueCartId } });
        return cart;

        /*
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
                */
    }
    /* Get Cart Items */
    getCartItems(request) {
        return this.getCart(request).then(cart => {
            return db.CartItem.findAll({
                where: { CartId: cart[0].id },
                include: [
                    { model: db.ProductDetail }
                ]
            }).then(cartItems => cartItems);
        });
    };

    // addToCart(productDId) {

    addToCart(request) {
        var productId = request.body.productId;
        this.getCart(request).then(cart => {
            db.CartItem.findOne({
                where: { ProductDetailId: productId, CartId: cart[0].id }
            }).then(cartItem => {
                if (cartItem) {
                    var qnt = cartItem.quantity + 1;
                    db.CartItem.update({ qty: qnt },
                        {
                            where: { ProductDetailId: productId, CartId: cart[0].id }
                        });
                } else {
                    db.CartItem.create({
                        qty: 1,
                        cartICartIdd: cart[0].id,
                        ProductDetailId: productId
                    });
                }
            });
        });


    }


    /* Get Cart Items */
    getCartItems(request) {
        return this.getCart(request).then(cart => {
            return db.CartItem.findAll({
                where: { CartId: cart[0].id },
                include: [
                    { model: db.ProductDetail }
                ]
            }).then(cartItems => cartItems);
        });
    };


    removeFromCart(data) { }
}

module.exports = new CartService()