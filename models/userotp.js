'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserOtp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserOtp.init({
    countryCode: DataTypes.STRING,
    phone: DataTypes.STRING,
    otp: DataTypes.STRING,
    type: {
      type: DataTypes.STRING,
      defaultValue : "PHONE",
      isIn:[["PHONE", "EMAIL"]]
    },
    expiredAt: DataTypes.DATE,
    queueId: DataTypes.STRING,
    isUsed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {
    sequelize,
    modelName: 'UserOtp',
    underscored:true
  });
  return UserOtp;
};