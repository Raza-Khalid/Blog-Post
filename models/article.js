'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article.hasMany(models.Comment, {
        foreignKey: 'articleId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Article.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Article.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
        model: 'users',
        key: 'id'
        }
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Article',
      tableName: 'articles'
    }
  )
  return Article
}
