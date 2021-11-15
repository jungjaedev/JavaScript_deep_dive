'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      comment: {
        type: Sequelize.STRING,
      },
    });
    await queryInterface.addColumn('comments', 'users_id', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('comments', 'posts_id', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint('comments', {
      fields: ['users_id'],
      type: 'foreign key',
      references: {
        table: 'users',
        field: 'id',
      },
    });
    await queryInterface.addConstraint('comments', {
      fields: ['posts_id'],
      type: 'foreign key',
      references: {
        table: 'posts',
        field: 'id',
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('comments');
  },
};
