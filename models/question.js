'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Question.belongsTo(models.Category, {
        as: "category",
        foreignKey: "categoryId",
      })

    }
  }
  Question.init({
    code: DataTypes.STRING,
    questionEn: DataTypes.STRING,
    questionKh: DataTypes.STRING,
    questionZh: DataTypes.STRING,
    answerCode: DataTypes.STRING,
    optionEn: DataTypes.JSON,
    optionKh: DataTypes.JSON,
    optionZh: DataTypes.JSON,

  }, {
    sequelize,
    modelName: 'Question',
    underscored: true,
    timestamps: false
  });
  return Question;
};