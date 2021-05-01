const { Faction } = require('../models');

const FactionData = [
  {
    Faction_name: 'Alliance',
  },
  {
    Faction_name: 'Horde',
  },
 
];

const seedFaction = () => Faction.bulkCreate(FactionData);

module.exports = seedFaction;