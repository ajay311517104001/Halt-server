'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('incoming_orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,

        type: Sequelize.STRING
      },
      items: {
        allowNull: false,

        type: Sequelize.JSONB
      },
      total: {
        allowNull: false,

        type: Sequelize.STRING
      },
      status: {
        allowNull: false,

        type: Sequelize.STRING
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
    await queryInterface.dropTable('incoming_orders');
  }
};