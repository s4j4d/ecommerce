'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CartItem.belongsTo(models.Cart)
      CartItem.belongsTo(models.ProductDetail)
    }
  }
  CartItem.init({
    qty: DataTypes.INTEGER,
    CartId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Cart',
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
    modelName: 'CartItem',
  });
  return CartItem;
};