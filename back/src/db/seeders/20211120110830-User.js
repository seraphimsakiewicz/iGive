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
      lastName: `U${i}`,
      birthday: `${i}`,
      phoneNumber: `${i}${i}${i}${i}`,
      email: `user${i}@mail.ru`,
      password: await bcrypt.hash('123', 5),
      city: `City${i}`,
      street: `Street${i}`,
      building: `Building${i}`,
      oms: Number(`${i}${i}${i}${i}`),
      bloodTypeId: i,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return userArr;
};
