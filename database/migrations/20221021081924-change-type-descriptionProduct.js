'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('Products', 'description',
      {
        type: Sequelize.TEXT
      }
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('Products ', 'description', {
          type: Sequelize.STRING,
      }
      )
    ])
  }
};

