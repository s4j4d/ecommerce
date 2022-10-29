'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.Discount)
      Cart.belongsTo(models.User)
      Cart.hasMany(models.CartItem)
      Cart.hasMany(models.Payment)
    }
  }
  Cart.init({
    totalPrice: DataTypes.INTEGER,
    tax: DataTypes.INTEGER,
    status: DataTypes.ENUM("open", "checkout"),
    DiscountId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Discount",
        key: 'id'
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};