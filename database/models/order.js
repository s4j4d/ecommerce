'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User)
    }
  }
  Order.init({
    item: DataTypes.JSONB,    // move cart item here
    payState: DataTypes.BOOLEAN,
    DeliveryState: DataTypes.ENUM("sended","deliver","not send","not deliver","sending"),
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};