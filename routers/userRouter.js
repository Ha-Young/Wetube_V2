import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.home, (req, res, next) => res.send('Users'));
userRouter.get(routes.userDetail, (req, res, next) => res.send('User Detail'));
userRouter.get(routes.editProfile, (req, res, next) => res.send('Edit Profile'));
userRouter.get(routes.changePassword, (req, res, next) => res.send('Change Password'));

export default userRouter;