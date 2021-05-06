const router = require('express').Router();
const { Game, Faction, Race, LinkTag } = require('../../models');


router.get('/', async (req, res) => {
    try {
        let allGames = Game.findAll({
            include: [Faction, Race, LinkTag],
            where: {
                faction_name: req.body.userInput
            }
        
        });
        res.status(200).status(allGames)
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/:id', (req, res) => {
    try {
        let 

    } catch (err) {


    }

    Game.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: Faction, Race, LinkTag,
            attributes: []
        }
    })
    .then(gameAdded => res.json(gameAdded))
    .catch(err => {
        console.log(err);
    });
});


router.post('/', async (req, res) => {
  Game.create({
      game_name: req.body.game_name
  })
    .then(gameAdded => res.json(gameAdded))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.put('/id', (req, res) => {
    Game.update({
        game_name: req.body.game_name
    },
    where, {
        id: req.params.id
    }
    )
    .then(gameAdded => {
        if (!gameAdded) {
            res.status(404).json({ message: 'Sorry no game found with this id'});
            return;
        }
        res.json(gameAdded);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;