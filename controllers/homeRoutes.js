const router = require('express').Router();
const sequelize = require('../config/connection');
const { Character, Game, Faction, Race, LinkTag, User} = require('../models');


router.get('/', (req, res) => {
    res.render('homepage')
});



module.exports = router;