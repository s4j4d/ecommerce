'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GroupPermissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: DataTypes.STRING,
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
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('GroupPermissions');
  }
};