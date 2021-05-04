// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Character extends Model {}

// set up fields and rules for Product model
Character.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    character_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    first_appearance: {
      type: DataTypes.STRING,
      allowNull: false
    },
    race: {
      type: DataTypes.INTEGER,
      references: {
        model: 'race',
        key: 'id',
      },
      allowNull: false
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    faction_char: {
      type: DataTypes.INTEGER,
      references: {
        model: 'faction',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Character',
  }
);

module.exports = Character;
