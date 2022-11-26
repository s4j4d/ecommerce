'use strict';
const db = require("../database/models")
const { Op } = require("sequelize");
const { raw } = require("express");

class ProductService {
    addCategory(category) {

        const cat = db.Category.findOrCreate({
            where: { name: category.name },
            defaults: {
                id: category.id,
                supperId: category.supId
            }
        })
        return cat
    }

    modifyCategory(category) {
        const Cat = db.Category.update({ name: category.name, supperId: category.supId },
            { where: { id: category.id } })
        return Cat
    }

    removeCategory(catId) {
        const cat = db.Category.destroy({ where: { id: catId } })
        return cat
    }

    getCategory() {
        const category = db.Category.findAll()
        return category
    }

    async getAllCategories() {
        const categories = await db.Category.findAll({
            where: { supperId: null },
            attributes: ['id', 'name', 'supperId'],
            raw: true,
        });
        for (const category of categories) {
            const f = await this.getSubCategory(category);
            if (!category.subs) {
                category.subs = [];
            }
            category.subs.push(f);
        }
        return categories;
    }

    async getSubCategory(category) {
        // const subCat = []
        const cats = await db.Category.findAll({
            where: { supperId: category.id },
            raw: true,
        });
        for (const cat of cats) {
            const subs = await this.getSubCategory(cat);
            if (subs) {
                if (!cat.subs) {
                    cat.subs = [];
                }
                cat.subs.push(subs);
            }
        }
        return cats
    }

    async getCategoryLevel(level) {
        if (level == 0) {
            return await this.getSubCategory(level)
        }
        var catLevel = []
        for (let index = 0; index < level; index++) {
            const category = await this.getSubCategory(index)
            for (const cat of category) {
                const categoryin = await this.getSubCategory(cat.id)
                if (categoryin.length > 0) {
                    catLevel.push(categoryin)
                }
            }
        }
        return catLevel
    }

    getShop() {
        const shop = db.Product.findAll()
        return shop
    }

    getProducts(catId) {
        const products = db.Product.findAll({ where: { CategoryId: catId } })
        return products
    }

    async findProduct(productId) {
        const product = await db.Product.findOne({
            where: {
                id: productId
            },
            include: [{
                model: db.ProductPicture,
                attributes: ['url']
            }, {
                model: db.ProductDetail,
                include: [{
                    model: db.Seller,
                    order: [
                        ['satisfactionrate', 'DESC']
                    ]
                }]
            }]
        })
        console.log(product);
        return product
    }

    async getSimmialarProduct(categoryId) {
        const similarProducts = await db.Product.findAll(
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