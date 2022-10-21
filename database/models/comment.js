'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.Product) 
      Comment.belongsTo(models.User) 
    }
  }
  Comment.init({
    content: DataTypes.STRING,
    liked: DataTypes.ENUM("-1","0","1"),
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    ProductId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};