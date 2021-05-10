// const router = require('express').Router();
// const { Op } = require("sequelize");
const { Game, Character, Faction, Race, LinkTag } = require('../../models');

// on home page, find all posts
router.get('/', (req, res) => {
    // read the whole table from the db with the findAll method
       try{ Game.findAll({
    // to select only some attributes, use the attributes option
    // most often, you pass an array
            attributes: [
                'game_name',
               
            ],
            include: [{
                    model: Character,
                    attributes: ['id', 'character_name'],
                   
                },
            ]
        });
// router.get('/', async (req, res) => {
//     console.log(req.body.game_name)
//     try {
//         const allGames = await Game.findAll({
//             include: Character,
//             where: {
//                 game_name: req.body.game_name
//             }
        
//         });
        res.status(200).json(allGames)
    } catch (err) {
        res.status(500).json(err);
    }
});


// router.get('/:id', async (req, res) => {
//     try {
//         const oneGame = await Game.findOne({
//             where: {
//                 id: req.params.id
//             },
//             include: {
//                 model: Faction, Race, LinkTag,
//                 attributes: []
//             }
//         });
//         res.status(200).json(oneGame)
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.post('/search', async (req, res) => {
//     console.log(req.body)
//     try {
//         const game = await Game.findAll({
//             where: {
//                 game_name: {
//                     [Op.substring]: req.body.searchterm
//                 },
//             }
//         });
//         console.log(game);
//         res.send(game);

//     } catch (err) {
//         console.error(err);
//         res.status(500).json(err)
//     }
// });



// module.exports = router;

// imports our connections
// const sequelize = require('../config/connection');
// // imports our 3 model object files
// const { Post, User, Comment } = require('../models');
// // imports express' router object
// const router = require('express').Router();

// // router.get('/', async (req, res) => {
// //     try {
// //         await res.render('homepage');
// //     } catch (err) {
// //         res.status(500).json(err);
// //       }
// // });

// // on home page, find all posts
// router.get('/', (req, res) => {
// // read the whole table from the db with the findAll method
//     Game.findAll({
// // to select only some attributes, use the attributes option
// // most often, you pass an array
//         attributes: [
//             'game_name',
           
//         ],
//         include: [{
//                 model: Character,
//                 attributes: ['id', 'character_name'],
               
//             },
//         ]
//     }),
//     // map response to remove extra Sequelize model crap
// // .then() makes the result of the Promise available to us
//         .then(dbPostData => {
//             // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//             // console.log(dbPostData)
//             // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//             const posts = dbPostData.map(post => post.get({ plain: true }));
//             // res.render('homepage', { posts, loggedIn: req.session.loggedIn });
//             console.log('------------------------------------------');
//             console.log(posts);
//             console.log('------------------------------------------');
//             // giving an obj w/ a prop called posts that is and array of obj(post objects)
//             res.render('homepage', { posts, loggedIn: req.session.loggedIn });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// // if login button is clicked, redirect to login handlebars page
// // if on route and user is logged in, redirect to home page
// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//         res.redirect('/');
//         return;
//     }
//     res.render('login');
// });

// // same as our login page, except signup counts as a login
// router.get('/signup', (req, res) => {
//     res.render('signup');
// });

// // when a user clicks on a post on the home page, view it
// // eventually this will be where a user can add comments
// // search for a single instance
// router.get('/post/:id', (req, res) => {
//     Post.findOne({
// // limit query to only load the Post of the id selected
// // multiple where filter checks can be passed
//             where: {
//                 id: req.params.id
//             },
//             attributes: [
//                 'id',
//                 'content',
//                 'title',
//                 'created_at'
//             ],
//             include: [{
//                     model: Comment,
//                     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//                     include: {
//                         model: User,
//                         attributes: ['username']
//                     }
//                 },
//                 {
//                     model: User,
//                     attributes: ['username']
//                 }
//             ]
//         })
//         .then(dbPostData => {
//             if (!dbPostData) {
//                 res.status(404).json({ message: 'No post found with this id' });
//                 return;
//             }
//             const post = dbPostData.get({ plain: true });
//             console.log(post);
//             res.render('single-post', { post, loggedIn: req.session.loggedIn });


//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// module.exports = router;