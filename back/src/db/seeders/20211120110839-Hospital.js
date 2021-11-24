const bcrypt = require('bcryptjs');

('use strict');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hospitals = await createHospitals();
    await queryInterface.bulkInsert('Hospitals', [...hospitals], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Hospitals', null, {
      restartIdentity: true,
      truncate: true,
    });
  },
};

const createHospitals = async () => {
  const hospitalsArr = [];
  for (let i = 1; i < 9; i++) {
    hospitalsArr.push({
      email: `hospital${i}@mail.ru`,
      password: await bcrypt.hash('123', 5),
      inn: `${i}${i}${i}${i}${i}${i}`,
      headOfDep: `HeadOfDep${i}`,
      phoneNumber: `${i}${i}${i}${i}${i}${i}`,
      city: `City${i}`,
      street: `Street${i}`,
      building: `Building${i}`,
      webSite: 'https://www.google.ru',
      title: `Hospital${i}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return hospitalsArr;
};
