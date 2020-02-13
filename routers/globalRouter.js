import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res, next) => res.send("Home"));
globalRouter.get(routes.join, (req, res, next) => res.send("Join"));
globalRouter.get(routes.login, (req, res, next) => res.send("Login"));
globalRouter.get(routes.logout, (req, res, next) => res.send("Logout"));
globalRouter.get(routes.search, (req, res, next) => res.send("Search"));

export default globalRouter;