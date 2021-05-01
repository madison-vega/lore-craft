const { Race } = require('../models');

const tagData = [
  {
    race_name: 'Human',
  },
  {
    race_name: 'Kul Tiran',
  },
  
  {
    race_name: 'Dwarf',
  },
  
  {
    race_name: 'Dark Iron Dwarf',
  },
  
  {
    race_name: 'Night elf',
  },
  {
    race_name: 'Void elf',
  },
  
  {
    race_name: 'Gnome',
  },
  {
    race_name: 'Mechagnome',
  },
  
  {
    race_name: 'Draenei',
  },
  {
    race_name: 'Lightforged Draenei',
  },
  
  {
    race_name: 'Worgen',
  },
 
  {
    race_name: 'Panderen',
  },
 
  {
    race_name: 'Orc',
  },
  {
    race_name: 'Maghar Orc',
  },
  
  {
    race_name: 'Undead',
  },
  
  {
    race_name: 'Tauren',
  },
  {
    race_name: 'Highmountain Tauren',
  },
  
  {
    race_name: 'Troll',
  },
  {
    race_name: 'Zandalari Troll',
  },
  
  {
    race_name: 'Blood elf',
  },
  {
    race_name: 'Nightborne',
  },
  
  {
    race_name: 'Goblin',
  },
  {
    race_name: 'Vulpera',
  },
  
  
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;