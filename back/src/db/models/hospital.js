"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Hospital extends Model {
    /**
     * Helper method for defining associations. This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ BloodStorage, Event }) {
      // define association here
      this.hasOne(BloodStorage, {
        foreignKey: "hospitalId",
      });
      this.hasMany(Event, {
        foreignKey: "hospitalId",
      });
    }
  }
  Hospital.init(
    {
      title: {
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
      headOfDep: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Optional fields
      image: DataTypes.STRING,
      inn: DataTypes.INTEGER,
      headOfDep: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      city: DataTypes.STRING,
      street: DataTypes.STRING,
      building: DataTypes.STRING,
      webSite: DataTypes.STRING,
      title: DataTypes.STRING,
      about: DataTypes.TEXT,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Hospital",
    }
  );
  return Hospital;
};
