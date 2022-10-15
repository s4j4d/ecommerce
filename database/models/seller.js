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
      // define association here
      Seller.belongsToMany(models.ProductDetail)
      
    }
  }
  Seller.init({
    price: DataTypes.INTEGER,
    qty: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Seller',
  });
  return Seller;
};