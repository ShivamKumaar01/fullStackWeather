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
    cityName: {
      type: DataTypes.STRING,
      validate: {
        min: 3,
        max: 12,
      },
    },
    windSpeed: DataTypes.STRING,
    temperature: DataTypes.STRING,
    sunrise: DataTypes.STRING,
    sunset: DataTypes.STRING,
    Humidity:DataTypes.STRING,
    Pressure:DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};