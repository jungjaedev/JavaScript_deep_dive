'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define(
    'posts',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      content: DataTypes.STRING,
      photo_link: DataTypes.STRING,
      like_count: DataTypes.INTEGER,
      comment_count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'posts',
    }
  );

  posts.associate = models => {
    posts.belongsTo(models.users, {
      foreignKey: 'users_id',
      sourceKey: 'id',
    });
    posts.hasMany(models.comments, {
      foreignKey: 'posts_id',
      sourceKey: 'id',
    });
    posts.hasMany(models.likes, {
      foreignKey: 'posts_id',
      sourceKey: 'id',
    });
  };

  return posts;
};
