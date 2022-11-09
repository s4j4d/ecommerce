'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Features', [{
      name: 'size',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 1
    },
    {
      name: 'color',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 2
    },
    {
      id: 4,
      name: 'capacity',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Features', null, {});
  }
};
