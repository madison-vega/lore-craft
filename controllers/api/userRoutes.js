const router = require('express').Router();
const { User } = require('../../models');
const wAuth = require('../../utils/auth');
const { route } = require('./gameRoutes');


router.post('/signup', async (req, res) => {
  try {
    console.log(req.body)
    const userData = await User.create({email: req.body.email, username: req.body.email, password: req.body.password});
    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.email = userData.email;
      req.session.loggedIn = true;

      res.status(200).json(userData);

    });
    

  } catch (err) {
    res.status(400).json(err);
  }

});

// will post to /user/login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      }
    });

    if (!userData) {
      res.status(400).json({ message: 'No user account found!' });
      return;

    }
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.email = userData.email;
      req.session.loggedIn = true;
      res.json({ user: userData, message: 'Successful log in!' })
    });
  } catch (err) {
    res.status(400).json(err);
  }

});



// router.post('/logout', (req, res) => {
//   if (req.session.loggedIn) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).json({ user: userData, message: 'Please login' });
//     res.end();

//   }
// });

router.get('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).json({ user: userData, message: 'Please login' });
    res.end();

  }
});




router.delete('/:id', wAuth, async (req, res) => {
  try {
    const deleteUser = await User.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!deleteUser) {
      res.status(404).json({ message: 'No user found with this id.' })
      return;
    }

  } catch (err) {
    res.status(500).json(err)

  }
});


module.exports = router;