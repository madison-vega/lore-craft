const { Faction } = require('../models');

const factionData = [
  {
    faction_name: 'Alliance',
  },
  {
    faction_name: 'Horde',
  },
 
];

const seedFaction = () => Faction.bulkCreate(factionData);

module.exports = seedFaction;