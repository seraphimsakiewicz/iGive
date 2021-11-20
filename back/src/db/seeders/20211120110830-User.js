'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Serafim',
          lastName: 'S',
          email: 'serafim@mail.ru',
          password: '123',
          city: 'City',
          street: 'Street',
          building: '21',
          oms: 2345678,
          bloodTypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Arman',
          lastName: 'A',
          email: 'arman@mail.ru',
          password: '123',
          city: 'City',
          street: 'Street',
          building: '21',
          oms: 876567342,
          bloodTypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Hamzat',
          lastName: 'H',
          email: 'hamzat@mail.ru',
          password: '123',
          city: 'City',
          street: 'Street',
          building: '21',
          oms: 834732986,
          bloodTypeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Kirill',
          lastName: 'B',
          email: 'kirill@mail.ru',
          password: '123',
          city: 'City',
          street: 'Street',
          building: '21',
          oms: 78352468,
          bloodTypeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {
      restartIdentity: true,
      truncate: true,
    });
  },
};
