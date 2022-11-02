'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('Sellers', 'ProductDetailId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: "ProductDetails",
            key: 'id'
          }
        }
      )
    ])
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Sellers ', 'ProductDetailId')
    ])
  }
};
