const { Character } = require('../models');

const characterData = [
  {
    character_name: 'Sylvanas Windrunner',
    age: 2800,
    first_appearance: 3,
    faction_char: 2,
    race: 1,
    bio: 'Sylvanas Windrunner is a character from the Warcraft series, serving as the undead racial leader.',
  },
  {
    character_name: 'Prince Arthus Menethil',
    age: 31,
    first_appearance: 3,
    faction_char: 1,
    race: 1,
    bio: 'Prince Arthas Menethil was an Alliance paladin in training under Uther the Lightbringer, he will later be known as the Lich King'
  },
  {
    character_name: 'Muradin Bronzebeard',
    age: 00,
    first_appearance: 3,
    faction_char: 1,
    race: 3,
    bio: 'none'
  },
  {
    character_name: 'Illidian Stormrage',
    age: 15000,
    first_appearance: 3,
    faction_char: 1,
    race: 5,
    bio: 'none'
  },
  {
    character_name: 'Thrall',
    age: 31,
    first_appearance: 3,
    faction_char: 2,
    race: 13,
    bio: 'none'
  },
  {
    character_name: 'Jaina Proudmoore',
    age: 37-40,
    first_appearance: 3,
    faction_char: 1,
    race: 1,
    bio: 'none'
  },
  {
    character_name: 'Malfurion Stormragre',
    age: 153200,
    first_appearance: 3,
    faction_char: 1,
    race: 5,
    bio: 'none'
  },
  {
    character_name: 'Grom Hellscream',
    age: 46,
    first_appearance: 2,
    faction_char: 2,
    race: 13,
    bio: 'none'
  },
];

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;