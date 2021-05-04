const router = require('express').Router();

const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');
const gameRoutes = require('./gameRoutes');
const newCharacter = require('./newCharRoute');

router.use('/user', userRoutes);
router.use('/character', characterRoutes);
router.use('/game', gameRoutes);
router.use('/newCharacter', newCharacter);


module.exports = router;