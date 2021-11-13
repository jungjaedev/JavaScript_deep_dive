'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.comments.belongsTo(models.users, {
        foreignKey: 'users_id',
        sourceKey: 'id',
      });
      models.comments.belongsTo(models.users, {
        foreignKey: 'posts_id',
        sourceKey: 'id',
      });
    }
  }
  Comments.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      comment: DataTypes.STRING,
      posts_id: DataTypes.INTEGER,
      users_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Comments',
    }
  );
  return Comments;
};
