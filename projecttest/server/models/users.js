'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      nickname: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'users',
    }
  );

  users.associate = models => {
    // define association here
    /**
      users안에 있는 "id값"을 "user_id라는 컬럼 이름"으로 posts모델에 새로운 컬럼으로 추가한다.
      */
    users.hasMany(models.posts, {
      foreignKey: 'users_id',
      sourceKey: 'id',
    });
    users.hasMany(models.comments, {
      foreignKey: 'users_id',
      sourceKey: 'id',
    });
    users.hasMany(models.likes, {
      foreignKey: 'users_id',
      sourceKey: 'id',
    });
  };

  return users;
};
