'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasMany(models.Discount)
      User.hasOne(models.Profile)
      User.hasOne(models.Cart)
      User.hasMany(models.Order)
      User.belongsToMany(models.Product, { through: models.WishList })
      User.belongsToMany(models.Address, { through: "UA" });
      // User.belongsToMany(models.Permission , {through:models.GroupPermission})
    }
  }
  User.init({
    name: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      //set(value) { this.setDataValue("password", hash(value)) }
    },
    primaryEmail: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    hooks: {
      afterCreate: function (User) {
        models.Profile.create({ UserId: User.id });
      }
      // afterCreate: function(User) {
      //   models.Profile.update(
      //     {balance: sequelize.literal('balance + User.quantity')},
      //     {where: { id: User.id }}
      //     );
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};
