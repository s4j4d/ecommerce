'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WishList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // WishList.belongsTo(models.User)
      // WishList.belongsToMany(models.Product)
    }
  }
  WishList.init({
    ProductId: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      references: {
        model: User,
        key: 'id'
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'WishList',
  });
  return WishList;
};