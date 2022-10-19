'use strict';
const {
  Model, JSONB, INTEGER, ARRAY
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Discount)
      User.hasOne(models.Profile)
      User.hasOne(models.Cart)
      User.hasMany(models.Order)
      User.belongsToMany(models.Product, {through: models.WishList})
      // User.belongsToMany(models.Permission , {through:models.GroupPermission})
    }
  }
  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    primaryEmail: DataTypes.STRING,
    phone: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
