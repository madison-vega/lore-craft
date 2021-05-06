// import models
const Character = require('./Character');
const Faction = require('./Faction');
const Game = require('./Game');
const Race = require('./Race');
const LinkTag = require('./LinkTag');
const NewCharacter = require('./NewCharacter');
const User = require('./User');
const sequelize = require('../config/connection.js');


// Character belongsTo games
Character.belongsTo(Game, {
  through: LinkTag,
  foreignKey: 'first_appearance',
});

// Games have many Characters
Game.hasMany(Character, {
  
  foreignKey: 'first_appearance',
});
// Character belongTo factions (through LinkTag)
Character.belongsTo(Faction, {
  through: LinkTag,
  foreignKey: 'faction_char',
});
Faction.belongsToMany(Character, {
  through: LinkTag,
  foreignKey: 'id',
});

// Race belongToMany Character (through LinkTag)
Race.belongsToMany(Character, {
  through: LinkTag,
  foreignKey: 'id',
});
Character.belongsToMany(Race, {
  through: LinkTag,
  foreignKey: 'race',
});

NewCharacter.belongsTo(User, {
  through: LinkTag,
  foreignKey: 'user_id'
});

User.belongsToMany(NewCharacter, {
  through: LinkTag,
  foreignKey: 'user_id'
})

module.exports = {
  Character,
  Game,
  Faction,
  Race,
  LinkTag,
  NewCharacter,
  User
};
