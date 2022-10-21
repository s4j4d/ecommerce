'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GroupPermission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {      
      GroupPermission.belongsToMany(models.User , {through:"GPU"})
      GroupPermission.belongsToMany(models.Permission , {through:"GPP"})
    }
  }
  GroupPermission.init({
    roleName: DataTypes.STRING,
    UserId: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      references: {
        model: 'User',
        key: 'id'
      }
    },
    PermissionId: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      references: {
        model: 'Permission',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'GroupPermission',
  });
  return GroupPermission;
};