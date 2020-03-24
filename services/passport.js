const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(new FacebookStrategy({
    clientID: keys.facebookId,
    clientSecret: keys.facebookSecret,
    callbackURL: "auth/facebook/callback"
}, async (accessToken, refreshToken, profile, done) => {
        /*console.log(profile);
        const existingUser = await User.findOne({ facebookId: profile.id })
        if (existingUser) {
            return done(null, existingUser);
        }
        const user = await new User({ facebookId: profile.id }).save()
        done(null, user);*/
        User.findOrCreate({ facebookId: profile.id }, function (err, user) {
            return done(err, user);
        });
    }
));



passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
        //console.log(profile);
        const existingUser = await User.findOne({ googleId: profile.id })
            if (existingUser) {
                //we already have user id
                return done(null, existingUser);
            }
            const user = await new User({ googleId: profile.id, name: profile.displayName, firstName: profile.name.givenName, lastName: profile.name.familyName }).save()
            done(null, user);
})); 


//(accessToken, refreshToken, profile, done) => {
//    User.findOne({ googleId: profile.id })
//        .then((existingUser) => {
//            if (existingUser) {
//                //we already have user id
//                done(null, existingUser);
//            }
//            else {
//                new User({ googleId: profile.id })
//                    .save()
//                    .then(user => done(null, user));
//            }
//        });
//}