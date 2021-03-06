'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID
      },
      firstname: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      lastname: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
      },
      username: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
      },
      password: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      role: {
          type: Sequelize.ENUM('fixer', 'admin'),
          defaultValue: 'fixer',
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};