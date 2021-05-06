const { Character } = require('../models');

const CharacterData = [
  {
    character_name: 'Sylvanus Windrunner',
    age: 2800,
    first_appearance: 3,
    faction_id: 2,
    race_id: 1,
    bio: 'Sylvanas Windrunner is a character from the Warcraft series, serving as the undead racial leader.'​,
  },
  {
    character_name: 'Prince Arthus Menethil',
    age: 31,
    first_appearance: 3,
    faction_id: 1,
    race_id: 1,
    bio: 'Prince Arthas Menethil was an Alliance paladin in training under Uther the Lightbringer, he will later be known as the Lich King, is an undead villain of the Warcraft series. He leads the undead armies of the Scourge in an attempt to conquer the world of Azeroth from his throne atop Icecrown Citadel'
  },
  {
    character_name: 'Muradin Bronzebeard',
    age: 00,
    first_appearance: 3,
    faction_id: 1,
    race_id: 3,
    bio: 'Muradin Bronzebeard is the High Thane of the Bronzebeard clan and the younger brother of the dwarven King Magni Bronzebeard and the older brother of the renowned explorer Brann Bronzebeard. He was a hero of the Alliance from the Second War and later served as ambassador to Lordaeron, where he befriended the young prince Arthas Menethil and trained him in combat. Muradin was believed to have perished in Northrend when Arthas claimed the runeblade Frostmourne.'
  },
  {
    character_name: 'Illidian Stormrage',
    age: 15000,
    first_appearance: 3,
    faction_id: 1,
    race_id: 5,
    bio: 'Illidan Stormrage, commonly known as the Betrayer, is the first of the demon hunters, the former self-proclaimed Lord of Outland, the former ruler of the Black Temple, and the original leader of the Illidari. He is the twin brother of Malfurion Stormrage and was, like his sibling, in love with Tyrande Whisperwind. Originally a powerful night elf sorcerer, Illidan officially betrayed his people by defecting to the demonic Burning Legion during the War of the Ancients, though his reasons for doing so were noble as he secretly aimed to repel the Legions invasion.'
  },
  {
    character_name: 'Thrall',
    age: 31,
    first_appearance: 3,
    faction_id: 2,
    race_id: 13,
    bio: 'Born as Goel, the son of the Durotan, chieftan of the Frostwollf clan of orcs, shortly after the second war, he was found next to his dead parents by the human Aedelas Blackmoore, who took him in his internment camp and raised the young orc as a gladiator and a slave, even given the orc slave the appropriate name; Thrall.'
  },
  {
    character_name: 'Jaina Proudmoore',
    age: 37-40,
    first_appearance: 3,
    faction_id: 1,
    race_id: 1,
    bio: 'Lady Jaina Proudmoore is the daughter of Daelin and Katherine Proudmoore, and sister of Derek and Tandred. She is considered one of the finest mages in all Azeroth and the most powerful human sorceress alive. She is the Lord Admiral of Kul Tiras, the former leader of the Kirin Tor of Dalaran, and of the port-city of Theramore.'
  },
  {
    character_name: 'Malfurion Stormragre',
    age: 153200,
    first_appearance: 3,
    faction_id: 1,
    race_id: 5,
    bio: 'Malfurion Stormrage was the first mortal druid on Azeroth, and the night elf who initiated the mainstream use of druidism among the kaldorei people ten millennia ago under tutelage of the demigod Cenarius. He is the twin brother of Illidan Stormrage, as well as the loving and beloved husband of the high priestess of Elune, Tyrande Whisperwind. Together, the two have represented the highest leadership of the night elves ever since the fall of Queen Azshara and her Highborne caste.'
  },
  {
    character_name: 'Grom Hellscream',
    age: 46,
    first_appearance: 2,
    faction_id: 2,
    race_id: 13,
    bio: 'Grommash "Grom" Hellscream was the legendary chieftain of the Warsong clan, a powerful warrior, close friend, and greatest lieutenant to Warchief Thrall. He was the first orc who drank the blood of Mannoroth the Destructor, thus binding the Horde to the Burning Legion — and he would eventually pay the ultimate price to free himself and his people from the Blood Curse.'
  },
];

const seedCharacters = () => Character.bulkCreate(CharacterData);

module.exports = seedCharacters;