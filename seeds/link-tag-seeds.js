const { LinkTag } = require('../models');

const linkTagData = [
  {
    character_id: 1,
    game_id: 3,
    race_id: 1,
    faction_id: 1,
    user_id: 1
  },
  {
    character_id: 2,
    game_id: 3,
    race_id: 1,
    faction_id: 1,
    user_id: 1
  },
  {
    character_id: 3,
    game_id: 3,
    race_id: 3,
    faction_id: 1,
    user_id: 1
  },
  {
    character_id: 4,
    game_id: 3,
    race_id: 5,
    faction_id: 1,
    user_id: 1
  },
  {
    character_id: 5,
    game_id: 3,
    race_id: 13,
    faction_id: 2,
    user_id: 1
  },
  {
    character_id: 6,
    game_id: 6,
    race_id: 1,
    faction_id: 1,
    user_id: 1
  },
  {
    character_id: 7,
    game_id: 6,
    race_id: 5,
    faction_id: 1,
    user_id: 1
  },
  {
    character_id: 8,
    game_id: 2,
    race_id: 13,
    faction_id: 2,
    user_id: 1
  } 
];

const seedLinkTag = () => LinkTag.bulkCreate(linkTagData);

module.exports = seedLinkTag;