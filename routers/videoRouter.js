import express from "express";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.home, (req, res, next) => res.send("Videos"));
videoRouter.get(routes.upload, (req, res, next) => res.send("Upload"));
videoRouter.get(routes.videoDetail, (req, res, next) => res.send("Video Detail"));
videoRouter.get(routes.editVideo, (req, res, next) => res.send("Edit Video"));
videoRouter.get(routes.deleteVideo, (req, res, next) => res.send("Delete Video"));

export default videoRouter;