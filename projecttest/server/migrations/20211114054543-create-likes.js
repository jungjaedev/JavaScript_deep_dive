'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('likes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    });
    await queryInterface.addColumn('likes', 'users_id', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('likes', 'posts_id', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint('likes', {
      fields: ['users_id'],
      type: 'foreign key',
      references: {
        table: 'users',
        field: 'id',
      },
    });
    await queryInterface.addConstraint('likes', {
      fields: ['posts_id'],
      type: 'foreign key',
      references: {
        table: 'posts',
        field: 'id',
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('likes');
  },
};
