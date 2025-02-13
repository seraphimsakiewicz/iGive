'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations. This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ BloodType, Event, Donation, UserEvent }) {
      // define association here
      this.hasOne(BloodType, {
        foreignKey: 'bloodTypeId',
      });
      this.belongsToMany(Event, {
        through: 'UserEvents',
        foreignKey: 'userId',
      });
      this.hasMany(Donation, {
        foreignKey: 'userId',
      });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bloodTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      // Optional fields
      lastName: DataTypes.STRING,
      birthday: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      street: DataTypes.STRING,
      building: DataTypes.STRING,
      oms: DataTypes.INTEGER,
      image: DataTypes.STRING,
      lastDonationDate: DataTypes.STRING,
      totalDonation: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
