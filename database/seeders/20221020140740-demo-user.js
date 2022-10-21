'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id:1,
      name: 'John',
      password: '1234',
      primaryEmail: 'example@example.com',
      phone: '09128453738',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:2,
      name: 'ahmad',
      password: '1234',
      primaryEmail: 'example@example.com',
      phone: '09368453738',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:3,
      name: 'sajad',
      password: '1234',
      primaryEmail: 'example@example.com',
      phone: '09398453738',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:4,
      name: 'amir',
      password: '1234',
      primaryEmail: 'example@example.com',
      phone: '09308453738',
      createdAt: new Date(),
      updatedAt: new Date()
    },]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

