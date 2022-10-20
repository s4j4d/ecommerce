'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feature extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Feature.belongsToMany(models.Category, {through: "FC"})
    }
  }
  Feature.init({
    name: DataTypes.STRING
  },
   {
    sequelize,
    modelName: 'Feature',
  });
  return Feature;
};