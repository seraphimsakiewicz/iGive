'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Hospitals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        restartIdentity: true,
        truncate: true,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      headOfDep: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      // Optional fields that can be updated later
      image: {
        type: Sequelize.STRING,
      },
      inn: {
        type: Sequelize.INTEGER,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      street: {
        type: Sequelize.STRING,
      },
      building: {
        type: Sequelize.STRING,
      },
      webSite: {
        type: Sequelize.STRING,
        validate: {
          isUrl: true,
        },
      },
      about: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Hospitals');
  },
};
