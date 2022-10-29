'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sellers')
    await queryInterface.createTable('Sellers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Shopname:{
        type:Sequelize.STRING
      },
      owner:{
        type:Sequelize.INTEGER,
        reference:{
          model:'User',
          key:'id'
        }
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