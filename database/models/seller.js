'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Seller.belongsTo(models.User)
      Seller.belongsTo(models.ProductDetail)
    }
  }
  Seller.init({
    price: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    ProductDetailId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ProductDetail',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Seller',
  });
  return Seller;
};