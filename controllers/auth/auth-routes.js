const router = require('express').Router();
const passport = require('passport');
const withAuth = require('../../utils/withAuth');

// auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
    });
    res.redirect('/');
});

// auth with google+
router.get('/google', passport.authenticate("google", {
    scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    console.log(req.user)
    res.redirect('/auth/login')
})

router.get('/profiletest', (req, res) => {
   res.send(req.user)
})

module.exports = router;