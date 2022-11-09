'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [{
      name: 'kalaye digital',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 1
    },
    {
      name: 'ashpazkhane',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 2
    },
    {
      id: 3,
      name: 'safar',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
