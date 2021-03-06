'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Hospitals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      inn: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER
      },
      headOfDep: {
        allowNull: false,
        type: Sequelize.STRING
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING
      },
      building: {
        allowNull: false,
        type: Sequelize.STRING
      },
      webSite: {
        validate: {
          isUrl: true,
        },
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      about: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Hospitals');
  }
};
