'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /**
      Users안에 있는 "id값"을 "user_id라는 컬럼 이름"으로 posts모델에 새로운 컬럼으로 추가한다.
      */
      models.users.hasMany(models.posts, {
        foreignKey: 'users_id',
        sourceKey: 'id',
      });
      models.users.hasMany(models.posts, {
        foreignKey: 'users_id',
        sourceKey: 'id',
      });
    }
  }
  users.init(
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
      google_auth_id: DataTypes.STRING,
      github_auth_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'users',
    }
  );

  return users;
};
