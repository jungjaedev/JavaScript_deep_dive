'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      content: {
        type: Sequelize.STRING,
      },
      photo_link: {
        type: Sequelize.STRING,
      },
      like_count: {
        type: Sequelize.INTEGER,
      },
      comment_count: {
        type: Sequelize.INTEGER,
      },
    });
    await queryInterface.addColumn('posts', 'users_id', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint('posts', {
      fields: ['users_id'],
      type: 'foreign key',
      references: {
        table: 'users',
        field: 'id',
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts');
  },
};
