'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User)
    }
  }
  Profile.init({
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    secondaryEmail: DataTypes.STRING,
    bouns: DataTypes.INTEGER,
    about: DataTypes.STRING,
    address: DataTypes.ARRAY(DataTypes.STRING),
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};