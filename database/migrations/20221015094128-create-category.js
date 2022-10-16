'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      // supperId: {
      //   type: Sequelize.INTEGER
      // },
      supperId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: Categories,
          key: 'id'
        }
      },
      // FeatureId: {
      //   type: Sequelize.ARRAY(Sequelize.INTEGER),
      //   references: {
      //     model: Feature,
      //     key: 'id'
      //   }
      // }, //mTOn
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
    await queryInterface.dropTable('Categories');
  }
};