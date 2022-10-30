'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('Carts', 'id',
        {
          primaryKey: true,
          type: Sequelize.STRING
        }
      )
    ])
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('Carts ', 'id', {
        type: Sequelize.INTEGER,
      }
      )
    ])
  }
};

