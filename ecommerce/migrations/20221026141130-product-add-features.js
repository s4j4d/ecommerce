'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('Products',
    'features',{
      type:Sequelize.JSONB
    })
  },

  async down (queryInterface, Sequelize) {
queryInterface.removeColumn('Products','features')
  }
};
