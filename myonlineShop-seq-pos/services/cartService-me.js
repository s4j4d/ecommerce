'use strict';

const db = require("../database/models");

const uuidv4 = require('uuid/v4');


/* Gets Cart Id */
const cartId = function (request) {
  if (request.session.cartId) {
    return request.session.cartId;
  } else {
    // request.session.cartId = generateCartId();   /* Generate Random Cart Id */
    /*request.session.cartId = () => { return uuidv4(); };   /* Generate Random Cart Id *\/
    return request.session.cartId;*/
    return uuidv4();    /* Generate Random Cart Id */
  }
};


/* Get Cart */
const getCart = function (request) {
  const cartId = cartId(request);
  const cart = db.Cart.findOrCreate({ where: { id: cartId } });
  return cart;
};

/* Add To Cart */
const addToCart = function (request) {
  const productId = request.body.productId;
  getCart(request).then(cart => {
    db.CartItem.findOne({
      where: { ProductId: productId, CartId: cart[0].id }
    }).then(cartItem => {
      if (cartItem) {
        const qnt = cartItem.qty + 1;
        db.CartItem.update({ qty: qnt },
          {
            where: { ProductId: productId, CartId: cart[0].id }
          });
      } else {
        db.CartItem.create({
          qty: 1,
          CartId: cart[0].id,
          ProductId: productId
        });
      }
    });
  });
};

/* Remove From Cart */
const removeFromCart = function (request) {
  const cartItemId = request.body.cartItemId;
  return db.CartItem.destroy({
    where: { id: cartItemId }
  });
};

/* Get Cart Items */
const getCartItems = function (request) {
  return getCart(request).then(cart => {
    return db.CartItem.findAll({
      where: { cartId: cart[0].id },
      include: [
        { model: productModel }
      ]
    }).then(cartItems => cartItems);
  });
};

/* Cart Items Count */
const cartItemsCount = function (cartItems) {
  const count = 0;
  if (cartItems.length) {
    cartItems.forEach(item => {
      count += item.qty;
    });
  }
  return count;
};

/* Get Cart Total */
const getCartTotal = function (cartItems) {
  const total = 0;
  if (cartItems.length) {
    cartItems.forEach(item => {
      total += item.qty * item.Product.price;
    });
  }
  return total;
};


/* Exports all methods */
module.exports = {
    addToCart,
    removeFromCart,
    getCartItems,
    cartItemsCount,
    getCartTotal,
    getCart,
    cartId
};