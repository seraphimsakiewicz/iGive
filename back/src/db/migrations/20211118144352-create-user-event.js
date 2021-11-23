'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserEvents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        restartIdentity: true,
        truncate: true,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          id: 'key',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      eventId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Events',
          id: 'key',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      donated: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    await queryInterface.dropTable('UserEvents');
  },
};
