'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Banner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Banner.init({
    name: DataTypes.STRING,
    hasDetail: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    hasTopup: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    amount: {
      type: DataTypes.DOUBLE(11,2),
      defaultValue: 0
    },
    credit: {
      type: DataTypes.DOUBLE(11,2),
      defaultValue: 0
    },

    type: {
      type: DataTypes.STRING,
      defaultValue: "HOME-BANNER",
      allowNull: false,
      validate: {
        isIn: [['HOME-BANNER', 'PRODUCT-BUNDLE']]
      }
    },
    imgUrlEn: {
      type: DataTypes.STRING,
      get() {
        const rawValue = this.getDataValue('imgUrlEn');
        if (!rawValue) return null;
        return `${STORAGE_BASE_URL}/images/banners/${rawValue}`;
      }
    },
    imgUrlZh: {
      type: DataTypes.STRING,
      get() {
        const rawValue = this.getDataValue('imgUrlZh');
        if (!rawValue) return null;
        return `${STORAGE_BASE_URL}/images/banners/${rawValue}`;
      }
    },
    imgUrlKh: {
      type: DataTypes.STRING,
      get() {
        const rawValue = this.getDataValue('imgUrlKh');
        if (!rawValue) return null;
        return `${STORAGE_BASE_URL}/images/banners/${rawValue}`;
      }
    },

    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },

    titleEn: DataTypes.STRING,
    titleZh: DataTypes.STRING,
    titleKh: DataTypes.STRING,

    contentEn: DataTypes.TEXT,
    contentKh: DataTypes.TEXT,
    contentZh: DataTypes.TEXT,

    deeplink: DataTypes.STRING,
    deeplinkType: {
      type: DataTypes.STRING,
      defaultValue: "IN-APP",
      allowNull: false,
      validate: {
        isIn: [['IN-APP', 'NEW-APP', 'BROWSER']]
      }
    },
    sort: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    }
  }, {
    sequelize,
    modelName: 'Banner',
    underscored: true,
    timestamps: false
  });
  return Banner;
};