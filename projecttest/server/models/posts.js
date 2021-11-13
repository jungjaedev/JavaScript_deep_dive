'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /**
      posts모델 안에 "user_id라는 컬럼 이름"으로 users모델에 있는 "id값"을 새로운 컬럼으로 추가한다.
      */
      models.posts.belongsTo(models.users, {
        foreignKey: 'users_id',
        sourceKey: 'id',
      });
    }
  }
  posts.init(
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
      users_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'posts',
    }
  );

  return posts;
};
