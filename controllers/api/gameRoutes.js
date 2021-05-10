const router = require('express').Router();
const { Op } = require("sequelize");
const { Game, Character, Faction, Race, LinkTag } = require('../../models');


router.get('/', (req, res) => {
    // console.log(req.body.game_name)
    // try {
        // const allGames = await 
        Game.findAll({
            attributes: [
                'id',
                'game_name']
            // include: Character,
            // where: {
            //     game_name: req.body.game_name
            // }
        
        })
        .then(dbGameData => res.json(dbGameData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
        // .then(dbGameData => {
        //     const games = dbGameData.map(game => game.get({plain: true}));
        // console.log(games);

        // res.render('dashboard')
        // })





    //     res.status(200).json(allGames)
    // } catch (err) {
    //     res.status(500).json(err);
    }
);


// router.get('/', (req, res) => {
//     Game.findAll({
//         where: {
//             name_game: req.session.name_game
//         },
//         attributes: [
//             'game_name'
//         ]
//     })
// })
//     .then(dbGame => {
//         const games = dbGame.map(game => game.get({ plain: true }));
//         console.log(games);
//         res.render('game', { games });
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     })


router.get('/:id', async (req, res) => {
    try {
        const oneGame = await Game.findOne({
            where: {
                id: req.params.id
            },
            include: {
                model: Faction, Race, LinkTag, Character,
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