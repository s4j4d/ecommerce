'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category) 
      Product.hasMany(models.Comment)
      Product.hasMany(models.Seller)
      Product.hasMany(models.CartItem)
      Product.belongsToMany(models.User, {through: models.WishList})
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    CategoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};