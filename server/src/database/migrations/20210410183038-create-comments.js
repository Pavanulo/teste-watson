'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return await queryInterface.createTable('comments', {
       id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
       },
        comment: {
          type: Sequelize.STRING(1200),
          allowNull: false,
        },
        audiopath: {
          type: Sequelize.STRING(1200),
          allowNull: true,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: true,
        },       
      });
     
  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.dropTable('comments');
  }
};
