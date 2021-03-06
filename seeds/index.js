const seedFaction = require('./faction-seeds');
const seedCharacter = require('./character-seeds');
const seedGame = require('./game-seeds');
const seedRace = require('./race-seeds');
const seedLinkTag = require('./link-tag-seeds');
const seedUser = require('./user');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedFaction();
  console.log('\n----- FACTIONS SEEDED -----\n');
  
  await seedGame();
  console.log('\n----- GAME SEEDED -----\n');
  
  await seedRace();
  console.log('\n----- RACE SEEDED -----\n');

  await seedUser();
  console.log('\n----- USER SEEDED -----\n');

  await seedCharacter();
  console.log('\n----- CHARACTER SEEDED -----\n');

  // await seedLinkTag();
  // console.log('\n----- LINK TAGS SEEDED -----\n');
  process.exit(0);
};

seedAll();