'use strict';
const { v4: uuidv4 } = require('uuid');
const { cartService } = require('../services');

class CartController {
  async getCart(req, res) {
    if (req?.cookies?.cart) {
      const cookie = JSON.parse(req.cookies.cart);
      // // const idArr = ;
  
      const carts = await cartService.getCart(cookie.items)
      res.status(200).send(JSON.stringify(carts))
    } else {
      res.status(200).send([])
    }
  }

  addToCart(req, res) {
    const cookie = req.cookies.cart;
    const item = req.body.items;

    var value = BigInt("0x" + uuidv4().replace(/-/g, ""));
    var decimal = value.toString() / (10 ** 30);

    if (cookie === undefined) {
      const randomID = decimal
      const cart = {
        id: randomID,
        items: [{
          id: item.id,
          count: 1
        }]
      }
      res.cookie('cart', JSON.stringify(cart), { maxAge: 900000, httpOnly: true });
      // console.log('cookie created successfully');
      res.send(JSON.stringify(cart))
    }
    else {
      const cart = JSON.parse(cookie)
      const repetitiveId = cart.items.find((i) => i.id == item.id)
      if (repetitiveId) {
        repetitiveId.count += 1;
      }
      else {
        cart.items.push({ id: item.id, count: 1 })
      }
      res.cookie('cart', JSON.stringify(cart), { maxAge: 900000, httpOnly: true });
      // console.log('cookie exists', cookie);
      res.send(JSON.stringify(cart))
    }
  }

  async addToCartAfterLogin(req, res) {
    const user_id = req.body.userId  //jwt token
    const item = req.body.items;
    try {
      const result = await cartService.addToCartAfterLogin(user_id, item.id)
      res.send(result)

    } catch (error) {
      res.send(error.message)
    }

  }

  removeFromCart(req, res) {
    const cookie = req.cookies.cart;
    const item = req.body.items;
    const cart = JSON.parse(cookie)

    const repetitiveId = cart.items.find((i) => i.id == item.id)
    if (repetitiveId) {
      if (repetitiveId.count <= 1) {
        const index = cart.items.findIndex((object) => object.id === item.id);
        cart.items.splice(index, 1)
      }
      else {
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