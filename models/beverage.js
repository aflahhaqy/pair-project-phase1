'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Beverage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Beverage.belongsTo(models.MerchantFood,{foreignKey: 'MerchantFoodId'})
    }
  }
  Beverage.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    MerchantFoodId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Beverage',
  });
  return Beverage;
};