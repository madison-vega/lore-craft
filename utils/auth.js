const wAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
        res.redirect('../views/login')
    } else {
        next();
    }
};

module.exports = wAuth;