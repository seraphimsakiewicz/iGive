const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hospitals = await createHospitals();
    await queryInterface.bulkInsert("Hospitals", [...hospitals], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Hospitals", null, {
      restartIdentity: true,
      truncate: true,
    });
  },
};

const createHospitals = async () => {
  const hospitalsArr = [
    {
      email: `hospital1@mail.com`,
      password: await bcrypt.hash("123", 5),
      city: `Moscow`,
      title: `City Clinical Hospital #1`,
      headOfDep: `John Smith`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: `hospital2@mail.com`,
      password: await bcrypt.hash("123", 5),
      city: `Moscow`,
      title: `Medical Center #14`,
      headOfDep: `Sarah Johnson`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: `hospital3@mail.com`,
      password: await bcrypt.hash("123", 5),
      city: `Moscow`,
      title: `University Clinical Hospital #1`,
      headOfDep: `Michael Brown`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: `hospital4@mail.com`,
      password: await bcrypt.hash("123", 5),
      city: `Saint Petersburg`,
      title: `City General Hospital #2`,
      headOfDep: `Emily Davis`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: `hospital5@mail.com`,
      password: await bcrypt.hash("123", 5),
      city: `Saint Petersburg`,
      title: `Northwest State Medical University`,
      headOfDep: `David Wilson`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: `hospital6@mail.com`,
      password: await bcrypt.hash("123", 5),
      city: `Saint Petersburg`,
      title: `Children's City Hospital #2`,
      headOfDep: `Jennifer Taylor`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  return hospitalsArr;
};
