import routes from "./routes";
import multer from "multer";

export const uploadVideo = multer({dest:"uploads/videos/"}).single('videoFile');

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'HaTube';
    res.locals.routes = routes;
    res.locals.user = {
        id: 1,
        isAuthenticated: true
    };
    next();
};