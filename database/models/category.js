'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(Category) // + Category.belongsTo(Category)
      Category.hasMany(models.Product) // mitune mTOn beshe k har pro chandta cat dashte bashe // Category.belongsToMany(models.Product)
      Category.belongsToMany(models.Feature)
    }
  }
  Category.init({
    name: DataTypes.STRING,
    supperId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};