const { LinkTag } = require('../models');

const LinkTagData = [
  {
    character_id: 1,
    game_id: 3,
    race_id: 1,
    faction_id: 1,
  },
  {
    character_id: 2,
    game_id: 3,
    race_id: 1,
    faction_id: 1,
  },
  {
    character_id: 3,
    game_id: 3,
    race_id: 3,
    faction_id: 1,
  },
  {
    character_id: 4,
    game_id: 3,
    race_id: 5,
    faction_id: 1,
  },
  {
    character_id: 5,
    game_id: 3,
    race_id: 13,
    faction_id: 2,
  },
  {
    character_id: 6,
    game_id: 6,
    race_id: 1,
    faction_id: 1,
  },
  {
    character_id: 7,
    game_id: 6,
    race_id: 5,
    faction_id: 1,
  },
  {
    character_id: 8,
    game_id: 5,
    race_id: 14,
    faction_id: 2,
  },
//   {
//     character_id: 1,
//     game_id: 6,
//     race_id: 0,
//     faction_id: 1,
//   },
//   {
//     character_id: 1,
//     game_id: 6,
//     race_id: 0,
//     faction_id: 1,
//   },
  
];

const seedLinkTag = () => LinkTag.bulkCreate(LinkTagData);

module.exports = seedLinkTag;