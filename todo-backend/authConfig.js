import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import User from "./models/User.js";
import dotenv from "dotenv"
dotenv.config();

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => User.findById(id).then(user => done(null, user)));

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/api/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  const user = await User.findOneAndUpdate(
    { googleId: profile.id },
    {
      googleId: profile.id,
      name: profile.displayName,
      email: profile.emails[0].value,
      photo: profile.photos[0].value
    },
    { upsert: true, new: true }
  );
  done(null, user);
}));
