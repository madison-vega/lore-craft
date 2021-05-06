const { Character } = require('../models');

const characterData = [
  {
    character_name: 'Sylvanus Windrunner',
    age: 2800,
    first_appearance: 3,
    faction_char: 2,
    race: 1,
    bio: 'none',
  },
  {
    character_name: 'Prince Arthus Menethil',
    age: 31,
    first_appearance: 3,
    faction_char: 1,
    race: 1,
    bio: 'none'
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
    character_name: 'Durotan',
    age: 29,
    first_appearance: 5,
    faction_char: 2,
    race: 14,
    bio: 'none'
  },
];

const seedCharacters = () => Character.bulkCreate(CharacterData);

module.exports = seedCharacters;