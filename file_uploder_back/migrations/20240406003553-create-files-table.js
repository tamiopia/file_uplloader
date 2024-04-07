'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('File', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fileName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fileSize: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      uploadedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
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
    await queryInterface.dropTable('File');
  }
};
