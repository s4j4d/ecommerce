'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Discount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Discount.hasMany(models.Cart)
    }
  }
  Discount.init({
    amount: DataTypes.INTEGER,
    floor: DataTypes.INTEGER,
    ceiling: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Discount',
  });
  return Discount;
};