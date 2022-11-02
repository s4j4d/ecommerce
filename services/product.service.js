'use strict';
const db = require("../database/models")
const { Product, ProductPicture, ProductDetail, Seller } = db

class ProductService {

    findProduct = async (productId) => {
        const product = await Product.findOne({
            where: {
                id: productId
            },
            include: [{
                model: ProductPicture,
                attributes: ['url']
            }, {
                model: ProductDetail,
                include: [{
                    model: Seller,
                    order: [
                        ['satisfactionrate', 'DESC']
                    ]
                }]
            }]
        })
        console.log(product);
        return product
    }

    getSimmialarProduct = async (categoryId) => {
        const similarProducts = await Product.findAll(
            {
                where: {
                    CategoryId: categoryId
                }
            },
            {
                limit: 8
            }
        )
        return similarProducts
    }

}

module.exports = new ProductService()