const { Character } = require('../models');

const CharacterData = [
  {
    character_name: 'Sylvanus Windrunner',
    age: 23,
    first_appearance: 14,
    faction_id: 1,
    race_id: 1,
    bio: 'none',
  },
  {
    character_name: 'Arthus Menethil',
    age: 90,
    first_appearance: 25,
    faction_id: 5,
    race_id: 1,
    bio: 'none'
  },
  {
    character_name: 'Muradin Bronzebeard',
    age: 22,
    first_appearance: 12,
    faction_id: 4,
    race_id: 1,
    bio: 'none'
  },
  {
    character_name: 'Illidian Stormrage',
    age: 24,
    first_appearance: 50,
    faction_id: 3,
    race_id: 1,
    bio: 'none'
  },
  {
    character_name: 'Thrall',
    price: 29,
    stock: 22,
    category_id: 2,
    race_id: 1,
    bio: 'none'
  },
  {
    character_name: 'Jaina Proudmoore',
    price: 29,
    stock: 22,
    category_id: 2,
    race_id: 1,
    bio: 'none'
  },
  {
    character_name: 'Malfurion Stormragre',
    price: 29,
    stock: 22,
    category_id: 2,
    race_id: 1,
    bio: 'none'
  },
  {
    character_name: 'Durotan',
    price: 29,
    stock: 22,
    category_id: 2,
    race_id: 1,
    bio: 'none'
  },
];

const seedCharacters = () => Product.bulkCreate(characterData);

module.exports = seedCharacters;