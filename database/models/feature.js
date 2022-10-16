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
      Feature.belongsToMany(models.Category)
    }
  }
  Feature.init({
    name: DataTypes.STRING
  },
  // CategoryId: {
  //   type: Sequelize.ARRAY(Sequelize.INTEGER),
  //   references: {
  //     model: Category,
  //     key: 'id'
  //   }
  // }, //mTOn
   {
    sequelize,
    modelName: 'Feature',
  });
  return Feature;
};