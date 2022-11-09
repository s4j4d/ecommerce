'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('Products', 'rate',
      {
        type: Sequelize.FLOAT
      }
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('Products ', 'rate', {
          type: Sequelize.INTEGER,
      }
      )
    ])
  }
};

