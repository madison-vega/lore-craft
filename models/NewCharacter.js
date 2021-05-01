const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

class NewCharacter extends Model {}


NewCharacter.init(
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
    Race: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: false
    },
    

    faction: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'new_character',
  }
);

module.exports = NewCharacter;
