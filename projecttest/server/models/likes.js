'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const likes = sequelize.define(
    'likes',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'likes',
    }
  );

  likes.associate = models => {
    likes.belongsTo(models.users, {
      foreignKey: 'users_id',
      sourceKey: 'id',
    });
    likes.belongsTo(models.posts, {
      foreignKey: 'posts_id',
      sourceKey: 'id',
    });
  };
  return likes;
};
