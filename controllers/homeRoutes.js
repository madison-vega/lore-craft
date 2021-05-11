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
    res.redirect('/login');
    return;
  } else {
    res.render('login');
  }

});

router.get('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy();
    res.render('/logout');
  }

  else {
    res.render('logout');
  }

});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy();
    res.render('/signup');

  } else {
    res.render('signup');
  }

});

router.get('/createCharacter', wAuth, (req, res) => {
  try {
      res.render("inputCharacter")
  } catch (err) {
      res.status(500).json(err);
  }
})
router.get('/games', wAuth, (req, res) => {
  try {
      res.render("game")
  } catch (err) {
      res.status(500).json(err);
  }
})
router.get('/characters', wAuth, (req, res) => {
  try {
      res.render("character")
  } catch (err) {
      res.status(500).json(err);
  }
})




module.exports = router;

