'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define(
    'comments',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      comment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'comments',
    }
  );

  comments.associate = models => {
    comments.belongsTo(models.users, {
      foreignKey: 'users_id',
      sourceKey: 'id',
    });
    comments.belongsTo(models.users, {
      foreignKey: 'posts_id',
      sourceKey: 'id',
    });
  };
  return comments;
};
