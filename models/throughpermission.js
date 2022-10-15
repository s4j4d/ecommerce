'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ThroughPermission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ThroughPermission.belongsTo(models.RolePermission)
      ThroughPermission.belongsTo(models.Permission)
    }
  }
  RolePermissions.init({
    roleName: DataTypes.STRING,
    permissionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ThroughPermission',
  });
  return ThroughPermission;
};