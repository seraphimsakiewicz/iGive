'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Hospitals',
      [
        {
          email: 'hospital1@mail.ru',
          password: '123',
          inn: 278136,
          headOfDep: 'head',
          phoneNumber: '7634871',
          city: 'City',
          street: 'Street',
          building: '123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'hospital2@mail.ru',
          password: '123',
          inn: 849578,
          headOfDep: 'head',
          phoneNumber: '7634871',
          city: 'City',
          street: 'Street',
          building: '123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'hospital3@mail.ru',
          password: '123',
          inn: 4753949,
          headOfDep: 'head',
          phoneNumber: '7634871',
          city: 'City',
          street: 'Street',
          building: '123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Hospitals', null, {
      restartIdentity: true,
      truncate: true,
    });
  },
};
