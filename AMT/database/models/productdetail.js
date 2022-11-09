'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductDetail.belongsTo(models.Product)
      ProductDetail.hasMany(models.Seller)
      ProductDetail.hasMany(models.CartItem)
    }
  }
  ProductDetail.init({
    qty: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    color: DataTypes.STRING,
    ProductId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'ProductDetail',
  });
  return ProductDetail;
};