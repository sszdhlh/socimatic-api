const express = require('express');
const passport = require('passport');
const router = express.Router();

// Start Google OAuth
router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// Google OAuth Callback
router.get('/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth/google/failure',
    session: false
  }),
  (req, res) => {
    const token = req.user.token;
    res.redirect(`https://socimatic-offical-website.vercel.app/oauth-success?token=${token}`);
  }
);

// Optional failure route
router.get('/auth/google/failure', (req, res) => {
  res.status(401).json({ message: 'Google Login Failed' });
});

module.exports = router;
