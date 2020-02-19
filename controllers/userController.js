export const join = (req, res, next) => res.render('join', {pageTitle: "Join"});
export const login = (req, res, next) => res.render('login', {pageTitle: "Login"});
export const logout = (req, res, next) => res.render('logout', {pageTitle: "Logout"});
export const users = (req, res, next) => res.render('users', {pageTitle: "Users"});
export const userDetail = (req, res, next) => res.render('userDetail', {pageTitle: "User Detail"});
export const editProfile = (req, res, next) => res.render('editProfile', {pageTitle: "Edit Profile"});
export const changePassword = (req, res, next) => res.render('changePassword', {pageTitle: "Change Password"});