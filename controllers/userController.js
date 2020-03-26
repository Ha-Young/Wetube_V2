import passport from "passport";
import routes from "../routes";
import User from "../models/User";


export const getJoin = (req, res, next) => {
    res.render('join', {pageTitle: "Join"});
}

export const postJoin = async (req, res, next) => {
    const {
        body: {name, email, password, password2}
    } = req;

    if (password != password2){
        res.status(400);
        res.render('join', {pageTitle: "Join"});
    } else {
        try {
            // Register User
            const user = await User({
                name,
                email
            });
            await User.register(user,password);
            // Log user in
            next();
        }catch (error) {
            console.log(error);
            res.redirect(routes.home);
        }
    }
}
export const getLogin = (req, res, next) => res.render('login', {pageTitle: "Login"});
export const postLogin = passport.authenticate('local', {
    failureRedirect: routes.login,
    successRedirect: routes.home
});

export const githubLogin = (req, res, next) => {
    console.log("githubLogin");
    passport.authenticate('github');
    console.log("githublogin2");
}

export const githubLoginCallback = async (_, __, profile, cb) => {
    const {
        _json: { id, avatar_url: avatarUrl, name, email }
    } = profile;
    try {
      const user = await User.findOne({ email });
      if (user) {
        user.githubId = id;
        user.save();
        return cb(null, user);
      }
      const newUser = await User.create({
        email,
        name,
        githubId: id,
        avatarUrl
      });
      return cb(null, newUser);
    } catch (error) {
      return cb(error);
    }
};

export const postGithubLogin = (req, res, next) => {
    console.log("post github login");
    res.redirect(routes.home);
};

export const getMe = (req, res) => {
    res.render("userDetail", { pageTitle: "User Detail", user: req.user });
};

export const logout = (req, res, next) => 
{
    req.logout();
    res.redirect(routes.home);
};

export const users = (req, res, next) => res.render('users', {pageTitle: "Users"});

export const userDetail = (req, res, next) => res.render('userDetail', {pageTitle: "User Detail"});

export const editProfile = (req, res, next) => res.render('editProfile', {pageTitle: "Edit Profile"});

export const changePassword = (req, res, next) => res.render('changePassword', {pageTitle: "Change Password"});
