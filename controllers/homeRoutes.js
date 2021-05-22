const router = require('express').Router();
const sequelize = require('../config/connection');
const { Character, Game, Faction, Race, LinkTag, User } = require('../models');
var express = require('express');
var cors = require('cors');
var app = express();
const wAuth = require('../utils/auth')



app.use(cors);

var corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.get('/', cors(corsOptions), (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
  } else {
    res.render('login');
  }

});

router.get('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy();
    res.render('logout');
  }

  else {
    req.session.destroy();
    res.render('logout');
  }

});

router.get('/signup', (req, res) => {
  try{
    res.render('signup');
  } 
  catch {
    res.status(500).json(err);

  }


});

router.get('/search', async (req, res) => {
  console.log(req.query.searchTerm)
  try {
    const characterData = await Character.findAll({
      
      where: {
        character_name: {
          [Op.substring]: req.query.searchTerm
        },
      },
      raw: true,
      nest: true
    });
    
    
    const character = characterData[0]
    res.render('searchResults', character);
    console.log(characterData)
    console.log(character);

  } catch (err) {
    console.error(err);
    res.status(500).json(err)
  }
});





module.exports = router;

