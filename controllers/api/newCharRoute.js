// const router = require('express').Router();
// const wAuth = require('../../utils/auth')
// const { NewCharacter } = require('../../models')

// router.get('/', wAuth, async (req, res) => {
//     try {
//         const newChar = await NewCharacter.findAll();
//         res.status(200).json(newChar)
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });
// router.post('/', wAuth, async (req, res) => {
//     try {
//         const createChar = await NewCharacter.create(req.body);
//         res.status(200).json(createChar);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// router.delete('/', wAuth, async (req, res) => {
//     try {
//         const deleteChar = await NewCharacter.destroy({
//             where: {
//                 id: req.params.id
//             }

//         })
//         res.status(200).json(deleteChar)
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });




// module.exports = router;


// Post.findOne({
//     where: {
//         id: req.params.id
//     },
//     attributes: ['id',
//         'content',
//         'title',
//         'created_at'
//     ],
//     include: [{
//             model: User,
//             attributes: ['username']
//         },
//         {
//             model: Comment,
//             attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//             include: {
//                 model: User,
//                 attributes: ['username']
//             }
//         }
//     ]
// })
// .then(dbPostData => {
//     if (!dbPostData) {
//         res.status(404).json({ message: 'No post found with this id' });
//         return;
//     }
//     res.json(dbPostData);
// })
// .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
// });
// ;

// // After user submits a new post, connect user session then get above
// router.post('/', withAuth, (req, res) => {
// // creates a new Post model instance and calls save on it
// Post.create({
//     title: req.body.title,
//     content: req.body.content,
//     user_id: req.session.user_id
// })
// .then(dbPostData => res.json(dbPostData))
// .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
// });
// });

// // when user clicks 'update' button, replace post-id data with new
// router.put('/:id', withAuth, (req, res) => {
// // Update multiple instances that match the where options
// Post.update({
// // hash of values to update
//     title: req.body.title,
//     content: req.body.content
// }, {
// // options to be met within the where attribute
//     where: {
//         id: req.params.id
//     }
// }).then(dbPostData => {
//     if (!dbPostData) {
//         res.status(404).json({ message: 'No post found with this id' });
//         return;
//     }
//     res.json(dbPostData);
// })
// .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
// });
// });

// // when user clicks 'delete' button, remove record from database entirely
// router.delete('/:id', withAuth, (req, res) => {
// // Delete multiple instances, in this case just where the id has been selected. On a post/:id page, clicking the delete button will trigger the front end form that will ship a delete request back here
// Post.destroy({
// where: {
//     id: req.params.id
// }
// }).then(dbPostData => {
// if (!dbPostData) {
//     res.status(404).json({ message: 'No post found with this id' });
//     return;
// }
// res.json(dbPostData);
// }).catch(err => {
// console.log(err);
// res.status(500).json(err);
// });
// });

// module.exports = router;


// --------------------------------------------------

const router = require('express').Router();
const wAuth = require('../../utils/auth')
const { NewCharacter } = require('../../models')

router.get('/', wAuth, async (req, res) => {
    try {
        const newChar = await NewCharacter.findAll();
        res.status(200).json(newChar)
    } catch (err) {
        res.status(500).json(err);
    }
});
router.post('/', wAuth, async (req, res) => {
    try {
        const createChar = await NewCharacter.create(req.body);
        res.status(200).json(createChar);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/', wAuth, async (req, res) => {
    try {
        const deleteChar = await NewCharacter.destroy({
            where: {
                id: req.params.id
            }

        })
        res.status(200).json(deleteChar)
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;


// Post.findOne({
//     where: {
//         id: req.params.id
//     },
//     attributes: ['id',
//         'content',
//         'title',
//         'created_at'
//     ],
//     include: [{
//             model: User,
//             attributes: ['username']
//         },
//         {
//             model: Comment,
//             attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//             include: {
//                 model: User,
//                 attributes: ['username']
//             }
//         }
//     ]
// })
// .then(dbPostData => {
//     if (!dbPostData) {
//         res.status(404).json({ message: 'No post found with this id' });
//         return;
//     }
//     res.json(dbPostData);
// })
// .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
// });
// });

// // After user submits a new post, connect user session then get above
// router.post('/', withAuth, (req, res) => {
// // creates a new Post model instance and calls save on it
// Post.create({
//     title: req.body.title,
//     content: req.body.content,
//     user_id: req.session.user_id
// })
// .then(dbPostData => res.json(dbPostData))
// .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
// });
// });

// // when user clicks 'update' button, replace post-id data with new
// router.put('/:id', withAuth, (req, res) => {
// // Update multiple instances that match the where options
// Post.update({
// // hash of values to update
//     title: req.body.title,
//     content: req.body.content
// }, {
// // options to be met within the where attribute
//     where: {
//         id: req.params.id
//     }
// }).then(dbPostData => {
//     if (!dbPostData) {
//         res.status(404).json({ message: 'No post found with this id' });
//         return;
//     }
//     res.json(dbPostData);
// })
// .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
// });
// });

// // when user clicks 'delete' button, remove record from database entirely
// router.delete('/:id', withAuth, (req, res) => {
// // Delete multiple instances, in this case just where the id has been selected. On a post/:id page, clicking the delete button will trigger the front end form that will ship a delete request back here
// Post.destroy({
// where: {
//     id: req.params.id
// }
// }).then(dbPostData => {
// if (!dbPostData) {
//     res.status(404).json({ message: 'No post found with this id' });
//     return;
// }
// res.json(dbPostData);
// }).catch(err => {
// console.log(err);
// res.status(500).json(err);
// });
// });

// module.exports = router;
