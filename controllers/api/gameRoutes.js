const router = require('express').Router();
const { Op } = require("sequelize");
const { Game, Character, Faction, Race, LinkTag } = require('../../models');


router.get('/', async (req, res) => {
    console.log(req.body.game_name)
    try {
        const allGames = await Game.findAll({
            include: Character,
            where: {
                game_name: req.body.game_name
            }
        
        });
        res.status(200).json(allGames)
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/:id', async (req, res) => {
    try {
        const oneGame = await Game.findOne({
            where: {
                id: req.params.id
            },
            include: {
                model: Faction, Race, LinkTag,
                attributes: []
            }
        });
        res.status(200).json(oneGame)
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/search', async (req, res) => {
    console.log(req.body)
    try {
        const game = await Game.findAll({
            where: {
                game_name: {
                    [Op.substring]: req.body.searchterm
                },
            }
        });
        console.log(game);
        res.send(game);

    } catch (err) {
        console.error(err);
        res.status(500).json(err)
    }
});



module.exports = router;