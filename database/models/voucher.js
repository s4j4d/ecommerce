'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Voucher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Voucher.belongsToMany(models.User, {through: "VU"})
      models.User.belongsToMany(Voucher ,{through: "VU"})
    }
  }
  Voucher.init({
    title: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    supplier: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Voucher',
  });
  return Voucher;
};