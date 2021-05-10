const router = require('express').Router();
const apiRouter = require('./api');
const homeRoutes = require('./homeRoutes');
// const dashboardRoutes= require('./dashboard-routes');

router.use('/', homeRoutes);
router.use('/api', apiRouter);
// router.use('/dashboard', dashboardRoutes);

router.use((req, res) => {
    res.status(404).end();
});


module.exports = router;