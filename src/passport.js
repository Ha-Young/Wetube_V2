import dotenv from "dotenv";
dotenv.config();
import passport from "passport";
import User from "./models/User";
import { githubLoginCallback } from "./controllers/userController";
import routes from "./routes";
var GitHubStrategy = require('passport-github').Strategy;


console.log(process.env.GH_ID, process.env.GH_SECRET);
console.log(`http://localhost:4000${routes.gitHubCallback}`);

passport.use(new GitHubStrategy({
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: `http://localhost:4000/${routes.gitHubCallback}`
  },
  githubLoginCallback
));

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
