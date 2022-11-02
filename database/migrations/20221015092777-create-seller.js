'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sellers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Shopname: {
        type: Sequelize.STRING
      },
      satisfactionrate: {
        type: Sequelize.FLOAT
      },
      rejectionrate: {
        type: Sequelize.FLOAT
      },
      reliability: {
        type: Sequelize.FLOAT
      },
      sendontimerate: {
        type: Sequelize.FLOAT
      },
      price: {
        type: Sequelize.INTEGER
      },
      qty: {
        type: Sequelize.DECIMAL
      },
      owner: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'User',
          key: 'id'
        }
      },
      // ProductDetailId: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: "ProductDetails",
      //     key: 'id'
      //   }
      // },
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
    await queryInterface.dropTable('Sellers');
  }
};