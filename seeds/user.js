const { User } = require('../models');

const userData = [
  {
    username: 'James',
    email: 'james@mail.com',
    password: 'password1'
  },
  {
    username: 'Jessie',
    email: 'jessie@mail.com',
    password: 'password2'
  },
  {
    username: 'Ash',
    email: 'ash@mail.com',
    password: 'password3'
  },
  
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;