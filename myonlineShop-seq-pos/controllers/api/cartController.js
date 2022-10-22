const { user } = require("pg/lib/defaults");
const { where } = require("sequelize");
const db = require("../../database/models");

const addToCart = async(req, res) => {
    const productId = req.body.productId
    const cartId = req.body.CartId

    try {  
    //check user session ...........
        const product = await db.Product.findOne({ where: {id: productId}})  //check product 
        if (product) {
            const cart = await db.Cart.findOrCreate({ where: { id: cartId }});
            const cartItem = await db.CartItem.findOne({ where: {CartId: cartId, ProductId: productId}})
            if (cartItem) {
                await db.CartItem.update({ qty: cartItem.qty + 1 },{
                        where: { ProductId: productId, CartId: cart[0].id } });
            } else if (!cartItem){
                await db.CartItem.create({ 
                    qty: 1,  CartId: cart[0].id,  ProductId: productId });
            }
        }
    } catch (error) {
        return res.status(400).send({
            status: "error",
            message: error.message,
            data: null
        })
    }
};


/************2************/
/* Gets Cart Id */  /* Get Cart */
  const getCart = async function (req, res) {
    const cartId = () => {
        if (req.session.cartId) {
          return req.session.cartId;
        } else {
          return uuidv4();    /* Generate Random Cart Id */
        }
      };
      try {
        const cart = await db.Cart.findOrCreate({ where: { id: cartId } });
        return cart;
      } catch (error) {
        return res.status(400).send({
            status: "error",
            message: error.message,
            data: null
        })
      }
  };


  
/************3************/
const get_cart = async (req, res) => {
    const userId = req.user.id;
    try {
        const cart = await db.Cart.findOne({ userId });
        if (cart && cart.items.length > 0) {
            res.status(200).send(cart);
        } else {
            res.send(null);
        }
        } catch (error) {
            res.status(500).send();
    }
};

const create_cart = async (req, res) => {
    const userId = req.user.id;
    const { itemId, quantity } = req.body;
    try {
        const cart = await db.Cart.findOne({ userId });
        const itemC = await db.CartItem.findOne({ id: itemId });
        if (!itemC) {
            res.status(404).send({ message: "item not found" });
            return;
        }
        const price = itemC.price;
        const name = itemC.name;//If cart already exists for user,
        if (cart) {
        const itemIndex = cart.items.findIndex((itemC) => itemC.itemId ==  itemId);//check if product exists or not
        if (itemIndex > -1) {
        let product = cart.items[itemIndex];
        product.quantity += quantity;
        cart.bill = cart.items.reduce((acc, curr) => {
        return acc + curr.quantity * curr.price;
    },0)
    cart.items[itemIndex] = product;
    await cart.save();
    res.status(200).send(cart);
    } else {
    cart.items.push({ itemId, name, quantity, price });
    cart.bill = cart.items.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
    },0)
    await cart.save();
    res.status(200).send(cart);
    }
    } else {//no cart exists, create one
        const newCart = await db.Cart.create({
    userId,
    items: [{ itemId, name, quantity, price }],
        bill: quantity * price,
    });
    return res.status(201).send(newCart);
    }
    } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
    }
};


module.exports = addToCart