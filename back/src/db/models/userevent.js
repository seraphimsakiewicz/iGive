'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Event }) {
      // define association here
      this.hasMany(User, {
        foreignKey: 'id',
      });
      this.hasMany(Event, {
        foreignKey: 'id',
      });
    }
  }
  UserEvent.init(
    {
      userId: DataTypes.INTEGER,
      eventId: DataTypes.INTEGER,
      donated: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'UserEvent',
    }
  );
  return UserEvent;
};
