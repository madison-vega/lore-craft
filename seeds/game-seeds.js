const { Game } = require('../models');

const gameData = [
  {
    game_name: 'Warcraft 1',
  },
  {
    game_name: 'Warcraft 2 ',
  },
  {
    game_name: 'Warcraft 3 Reign Of Chaos',
  },
  {
    game_name: 'Warcraft 3: The Frozen Throne',
  },
  {
    game_name: 'World Of Warcraft',
  },

];

const seedGame = () => Game.bulkCreate(gameData);

module.exports = seedGame;