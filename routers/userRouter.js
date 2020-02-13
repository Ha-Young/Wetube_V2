import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => res.send('user index'));
userRouter.get("/edit", (req, res, next) => res.send('user edit'));
userRouter.get("/password", (req, res, next) => res.send('user password'));

export default userRouter;