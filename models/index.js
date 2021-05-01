// import models
const Character = require('./Character');
const Faction = require('./Faction');
const Game = require('./Game');
const Race = require('./Race');
const LinkTag = require('./LinkTag');
const NewCharacter = require('./NewCharacter');
const User = require('./User');

// Character belongsTo games
Character.belongsTo(Game, {
foreignKey: 'game_name',
});
// Games have many Characters
Game.hasMany(Character, {
  foreignKey: 'game_name',
});
// Character belongTo factions (through LinkTag)
Character.belongsTo(Faction, {
  through: LinkTag,
  foreignKey: 'faction_id',
});

// Race belongToMany Character (through LinkTag)
Race.belongsToMany(Character, {
  through: LinkTag,
  foreignKey: 'race_id',
});

NewCharacter.belongsTo(User, {
  through: LinkTag,
  foreignKey: 'user_id'
});

User.hasMany(NewCharacter, {
  through: LinkTag,
  foreignKey: 'user_id'
})

module.exports = {
  Character,
  Game,
  Faction,
  Race,
  LinkTag,
  NewCharacter
};
