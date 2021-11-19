'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      bloodTypeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'BloodTypes',
          id: 'key',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      eventDate: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      active: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      priority: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      hospitalId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Hospitals',
          id: 'key',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
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
    await queryInterface.dropTable('Events');
  },
};
