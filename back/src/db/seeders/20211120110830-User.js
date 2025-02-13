const bcrypt = require('bcryptjs');

('use strict');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await createUsers();
    await queryInterface.bulkInsert('Users', [...users], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {
      restartIdentity: true,
      truncate: true,
    });
  },
};

const createUsers = async () => {
  const userArr = [];
  for (let i = 1; i < 9; i++) {
    userArr.push({
      name: `User${i}`,
      email: `user${i}@mail.com`,
      password: await bcrypt.hash('123', 5),
      city: `Moscow`,
      bloodTypeId: i,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: `User${i}B`,
      email: `user${i}b@mail.com`,
      password: await bcrypt.hash('123', 5),
      city: `Saint Petersburg`,
      bloodTypeId: i,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return userArr;
};