// import models
const Character = require('./Character');
const Faction = require('./Faction');
const Game = require('./Game');
const Race = require('./Race');
const LinkTag = require('./LinkTag');

// Products belongsTo Category
Character.belongsTo(Game, {
foreignKey: 'game_name',
});
// Categories have many Products
Game.hasMany(Character, {
  foreignKey: 'game_name',
});
// Products belongToMany Tags (through ProductTag)
Character.belongsTo(Faction, {
  through: LinkTag,
  foreignKey: 'faction_id',
});

// Tags belongToMany Products (through ProductTag)
Race.belongsToMany(Character, {
  through: LinkTag,
  foreignKey: 'race_id',
});

module.exports = {
  Character,
  Game,
  Faction,
  Race,
  LinkTag,
};
