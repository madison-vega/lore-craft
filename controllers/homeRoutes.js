const router = require('express').Router();
const sequelize = require('../config/connection');
const { Character, Game, Faction, Race, LinkTag, User } = require('../models');
var express = require('express');
var cors = require('cors');
var app = express();
const { Op } = require("sequelize");

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
    res.redirect('/newCharacter');
    return;
  } else {
    res.render('login');
  }

});

router.get('/logout', (req, res) => {
  if (req.session.loggedIn) {
    res.render('/logout');
    return;
  } else {
    res.redirect('/login');
  }

});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/logout');
    return;
  } else {
    res.redirect('/signup');
  }

});

router.get('/search:', async (req, res) => {
  console.log(req.query)
  try {
      const characterData = await Character.findAll({
          where: {
              character_name: {
                  [Op.substring]: req.body.searchContent
              },
          }
      });
      res.render('searchResults', { characters: characterData });

  } catch (err) {
      console.error(err);
      res.status(500).json(err)
  }
});





module.exports = router;

