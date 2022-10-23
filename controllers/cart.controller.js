'use strict';
const { cartService } = require('../services');
class CartController {
    getCart(req, res){
        console.log(req.body);
        res.send("ok")
        cartService.getCart()
    }
    addToCart(req, res){}
    removeFromCart(req, res){}
}

module.exports = new CartController();