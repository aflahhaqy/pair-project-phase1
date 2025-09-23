'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userMerchant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userMerchant.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    gender: DataTypes.STRING,
    ktp: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'userMerchant',
  });
  return userMerchant;
};