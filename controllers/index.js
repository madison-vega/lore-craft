const router = require('express').Router();
const apiRouter = require('./api');
const homeRoutes = require('./homeRoutes');


router.use('/api', apiRouter);
router.use('/', homeRoutes);


router.use((req, res) => {
    res.status(404).end();
});


module.exports = router;