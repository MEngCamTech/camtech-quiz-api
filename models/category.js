'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Question, {
        as: "questions",
        foreignKey: "categoryId",
      })

    }
  }
  Category.init({
    nameEn: DataTypes.STRING,
    nameZh: DataTypes.STRING,
    nameKh: DataTypes.STRING,
    iconUrl: {
      type: DataTypes.STRING,
      get() {
        const rawValue = this.getDataValue('iconUrl');

        if (!rawValue) return null;
        return `${STORAGE_BASE_URL}/images/icons/${rawValue}`;
      }
    },
  }, {
    sequelize,
    modelName: 'Category',
    underscored: true,
    timestamps: false
  });
  return Category;
};