'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ProductDetails', [{
      id: 1,
      ProductId: 1,
      color: 'rozgold',
      qty: 4,
      price: 30000000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      ProductId: 2,
      color: 'rozgold',
      qty: 5,
      price: 30560000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      ProductId: 3,
      color: 'rozgold',
      qty: 14,
      price: 50000000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 4,
      ProductId: 1,
      image: 'black',
      qty: 4,
      price: 31000000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 5,
      ProductId: 1,
      image: 'red',
      qty: 4,
      price: 30000000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 6,
      ProductId: 5,
      price: 1022000,
      createdAt: new Date(),
      updatedAt: new Date()
    },]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ProductDetails', null, {});
  }
};
