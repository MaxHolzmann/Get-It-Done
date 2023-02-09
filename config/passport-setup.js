require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/User');


passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findByPk(id).then((user) => {
        done(null, user)
    })
})

passport.use(
    new GoogleStrategy({
        //options for strategy
        callbackURL: "/auth/google/redirect",
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }, async (accessToken, refreshToken, profile, done) => {
        //change to async await
         User.findOne({
            where: {
                google_id: profile.id
            }
        }).then((currentUser) => {
            if(currentUser) {
                console.log('already have this user')
                done(null, currentUser)
            } else {
                    User.create({
                    google_id: profile.id,
                    name: profile.displayName
                }).then((newUser) => {
                    console.log(newUser)
                    done(null, newUser)
                })
            }
        })
    }))
