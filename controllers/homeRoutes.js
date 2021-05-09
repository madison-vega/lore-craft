const router = require('express').Router();
const sequelize = require('../config/connection');
const { Character, Game, Faction, Race, LinkTag, User } = require('../models');
var express = require('express');
var cors = require('cors');
var app = express();

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
    
  } else {
    res.redirect('/login');
    res.status(404).json({ message: 'No user found with this id.' });
  }

});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/logout');
    return;
  } else {
    res.render('/signup');
    return;
  }

});





module.exports = router;

