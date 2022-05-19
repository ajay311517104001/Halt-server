'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class incoming_order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  incoming_order.init({
    name: DataTypes.STRING,
    items: DataTypes.JSONB,
    total: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'incoming_order',
  });
  return incoming_order;
};