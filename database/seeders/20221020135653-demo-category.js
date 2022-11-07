'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [{
      name: 'کالای دیجیتال',
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
    },
    {
      id: 4,
      name: 'Lavazem janebie mobile',
      supperId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 5,
      name: 'power bank',
      supperId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 6,
      name: 'toys',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
