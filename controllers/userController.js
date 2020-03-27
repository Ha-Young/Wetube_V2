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
                email,
            });
            await User.register(user,password);
            console.log("join user : ", user);
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
        _json: { id, avatar_url: photoUrl, name, email }
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
        photoUrl
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

export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate("videos");
        res.render("userDetail", { pageTitle: "User Detail", user });
      } catch (error) {
        res.redirect(routes.home);
    }
};

export const logout = (req, res, next) => 
{
    req.logout();
    res.redirect(routes.home);
};

export const users = (req, res, next) => res.render('users', {pageTitle: "Users"});

export const userDetail = (req, res, next) => res.render('userDetail', {pageTitle: "User Detail"});

export const getEditProfile = (req, res, next) => res.render('editProfile', {pageTitle: "Edit Profile"});

export const postEditProfile = async (req, res) => {
    const {
      body: { name, email },
      file
    } = req;

    try {
      await User.findByIdAndUpdate(req.user.id, {
        name,
        email,
        photoUrl: file ? file.path : req.user.photoUrl
      });

      res.redirect(routes.me);
    } catch (error) {
        res.redirect(routes.editProfile);
    }
};

export const getChangePassword = (req, res, next) => res.render('changePassword', {pageTitle: "Change Password"});

export const postChangePassword = async (req, res) => {
    const {
      body: { oldPassword, newPassword, newPassword1 }
    } = req;
    try {
        if (newPassword !== newPassword1) {
            res.status(400);
            res.redirect(`/users/${routes.changePassword}`);
            return;
        }
        await req.user.changePassword(oldPassword, newPassword);
        res.redirect(routes.me);
        } catch (error) {
        res.status(400);
        res.redirect(`/users/${routes.changePassword}`);
    }
};
