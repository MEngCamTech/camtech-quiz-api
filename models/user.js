'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: DataTypes.STRING,
    countryCode: DataTypes.STRING(8),
    phone: DataTypes.STRING,
    otp: DataTypes.STRING(6),
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    status: DataTypes.STRING,
    lastSeenAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'User',
    underscored: true
  });
  return User;
};