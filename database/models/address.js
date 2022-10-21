'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Address.belongsToMany(models.User, { through: "UA" });
    }
  }
  Address.init({
    name: DataTypes.STRING,
    addressLine1: DataTypes.STRING,
    addressLine2: DataTypes.STRING,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    pstalCode: DataTypes.INTEGER,
    addressType: DataTypes.ENUM(['Delivery', 'Billing', 'Unknown'])
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};