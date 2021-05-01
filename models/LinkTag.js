const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class LinkTag extends Model { }

LinkTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    character_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'character',
        key: 'id',
      },


    },
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'game',
        key: 'id',
      },
    },
    race_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'race',
        key: 'id',
      },
    },
    faction_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'faction',
        key: 'id',
      },
    },
      user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'link_tag',
  }
);

module.exports = LinkTag;