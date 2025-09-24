'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MerchantFood extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MerchantFood.hasMany(models.Beverage,{foreignKey: 'MerchantFoodId'})
      MerchantFood.hasMany(models.Order,{foreignKey:'MerchantFoodId'})
      MerchantFood.belongsTo(models.UserMerchant,{foreignKey:'UserMerchantId'})
    }
  }
  MerchantFood.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    description: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    UserMerchantId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MerchantFood',
  });
  return MerchantFood;
};