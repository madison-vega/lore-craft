const router = require('express').Router();
const { Character, Faction, Game, Race } = require('../../models')

router.get('/', async (req, res) => {
    try {
        const character = await Character.findAll({
        });
        res.status(200).json(character)
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/:id', async (req, res) => {
    try {
        const oneChar = await Character.findByPk(req.params.id, {
            include: [Faction, Game, Race]
        })
        res.status(200).json(oneChar)
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/search', async (req, res) => {
    console.log(req.body)
    try {
        res.status(200)
        
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;