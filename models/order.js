'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.UserProfile,{foreignKey:'UserProfileId'})
      Order.belongsTo(models.MerchantFood,{foreignKey: 'MerchantFoodId'})
    }
  }
  Order.init({
    UserId: DataTypes.INTEGER,
    MerchantFoodId: DataTypes.INTEGER,
    code: DataTypes.STRING,
    price: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};