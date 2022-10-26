'use strict';
const { v4: uuidv4 } = require('uuid');
const { cartService } = require('../services');

class CartController {
  getCart(req, res){
    const cookie = req.cookies.cart;
    res.status(200).send(cookie)
  }

  async addToCart(req, res){
    const cookie = req.cookies.cart;
    const item = req.body.items;
    
    try {
      const productDetail = await cartService.addToCart(item.productDId)
      if (!productDetail) {
        res.status(404).json(
          {
            error: `products ${item.productDId} not found`,
            cart : JSON.parse(cookie)
          }
        )
      }
    } catch (error) {
      res.send(error)
    }

      if (cookie === undefined) {
        const randomID = uuidv4()
        const cart = {
            id: randomID,
            items: [{
              id: item.productDId, 
              count: 1, 
              price: productDetail.price, 
              totalPrice: productDetail.price
            }]
        }
        res.cookie('cart', JSON.stringify(cart), { maxAge: 900000, httpOnly: true });
        // console.log('cookie created successfully');
        res.send(JSON.stringify(cart))
      }
      else {
        const cart = JSON.parse(cookie)
        const repetitiveId = cart.items.find((i) => i.id == item.productDId) 
        if (repetitiveId) {
          repetitiveId.count += 1;
          repetitiveId.totalPrice = repetitiveId.price * repetitiveId.count
        }
        else{
          cart.items.push({id: item.productDId,  count: 1,  price: productDetail.price, totalPrice: productDetail.price })
        }
        res.cookie('cart', JSON.stringify(cart), { maxAge: 900000, httpOnly: true });
        // console.log('cookie exists', cookie);
        res.send(JSON.stringify(cart))
      } 
    
  }

  removeFromCart(req, res){
    const cookie = req.cookies.cart;
    const item = req.body.items;
    const cart = JSON.parse(cookie)

    const repetitiveId = cart.items.find((i) => i.id == item.productDId) 
    if (repetitiveId) {
      if (repetitiveId.count <= 1){
        const index = cart.items.findIndex((object) => object.id === item.productDId);
        cart.items.splice(index, 1)
      }
      else{
        console.log("else");
        repetitiveId.count -= 1;
        repetitiveId.totalPrice = repetitiveId.price * repetitiveId.count
      }
    }
    res.cookie('cart', JSON.stringify(cart), { maxAge: 900000, httpOnly: true });
    res.send(JSON.stringify(cart))
  }
}

module.exports = new CartController();