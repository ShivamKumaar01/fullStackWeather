'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cityName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      windSpeed: {
        type: Sequelize.STRING,
        allowNull: false
      },
      temperature: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sunrise: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sunset: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Humidity:{
        type: Sequelize.STRING,
        allowNull: false
      },
      Pressure:{
        type: Sequelize.STRING,
        allowNull: false
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