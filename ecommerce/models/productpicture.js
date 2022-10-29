'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductPicture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductPicture.belongsTo(models.Product)
    }
  }
  ProductPicture.init({
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductPicture',
  });
  return ProductPicture;
};