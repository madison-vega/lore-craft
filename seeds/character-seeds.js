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
    bio: 'Muradin Bronzebeard is the High Thane of the Bronzebeard clan and the younger brother of the dwarven King Magni Bronzebeard and the older brother of the renowned explorer Brann Bronzebeard. He is now at the throne of Ironforge'
  },
  {
    character_name: 'Illidian Stormrage',
    age: 15000,
    first_appearance: 3,
    faction_char: 1,
    race: 5,
    bio: 'Illidan Stormrage, commonly known as the Betrayer, is the first of the demon hunters, the former self-proclaimed Lord of Outland, the former ruler of the Black Temple, and the original leader of the Illidari. He is the twin brother of Malfurion Stormrage.'
  },
  {
    character_name: 'Thrall',
    age: 31,
    first_appearance: 3,
    faction_char: 2,
    race: 13,
    bio: 'Born as Goel, the son of the Durotan, chieftan of the Frostwollf clan, after the second war, he was found next to his dead parents by the human Aedelas Blackmoore, who took him in as a gladiator and slave, then appropriately named; Thrall.'
  },
  {
    character_name: 'Jaina Proudmoore',
    age: 38,
    first_appearance: 3,
    faction_char: 1,
    race: 1,
    bio: 'Lady Jaina Proudmoore is the daughter of Daelin and Katherine Proudmoore, and sister of Derek and Tandred. She is considered one of the finest mages in all Azeroth and the most powerful human sorceress alive.'
  },
  {
    character_name: 'Malfurion Stormragre',
    age: 153200,
    first_appearance: 3,
    faction_char: 1,
    race: 5,
    bio: 'Malfurion Stormrage was the first mortal druid on Azeroth, the night elf who initiated the use of druidism among the kaldorei people ten millennia ago under tutelage of the demigod Cenarius. Twin brother of Illidan Stormrage.'
  },
  {
    character_name: 'Grom Hellscream',
    age: 46,
    first_appearance: 2,
    faction_char: 2,
    race: 13,
    bio: 'Grommash "Grom" Hellscream was the legendary chieftain of the Warsong clan, a powerful warrior, close friend, and greatest lieutenant to Warchief Thrall. He bound the Horde to the Burning Legion by drinking blood of Mannoroth the Destructor,'
  },
];

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;