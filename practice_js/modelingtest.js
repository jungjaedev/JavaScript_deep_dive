const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const comments = sequelize.define(
    'posts',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      users_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      content: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      like_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      like_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      photo_link: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'comments',
      timestamps: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'user_id',
          using: 'BTREE',
          fields: [{ name: 'user_id' }],
        },
        {
          name: 'exhibition_id',
          using: 'BTREE',
          fields: [{ name: 'exhibition_id' }],
        },
      ],
    }
  );

  comments.associate = function (models) {
    comments.belongsTo(models.exhibition, {
      as: 'exhibition',
      foreignKey: 'exhibition_id',
      onDelete: 'CASCADE',
      hooks: true,
    });
    comments.belongsTo(models.users, {
      as: 'user',
      foreignKey: 'user_id',
      onDelete: 'CASCADE',
      hooks: true,
    });
  };

  return comments;
};


npx sequelize-cli model:generate --name posts --attributes content:string,photo_link:string,like_count:integer,comment_count:integer,user_id:integer