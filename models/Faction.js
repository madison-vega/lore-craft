const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
//Created the category model
class Faction extends Model {}

Faction.init(
  {
    // define columns
    // Define faction
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    faction_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'faction',
  }
);

module.exports = Faction;
