'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Images.init(
    {
      title: DataTypes.STRING,
      url: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Images',
      tableName: 'images'
    }
  )
  return Images
}
