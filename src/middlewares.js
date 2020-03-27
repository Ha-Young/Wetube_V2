import routes from "./routes";
import multer from "multer";

export const uploadVideo = multer({dest:"uploads/videos/"}).single('videoFile');
export const uploadAvatar = multer({ dest: "uploads/avatars/" }).single('avatar');

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'HaTube';
    res.locals.routes = routes;
    res.locals.loggedUser = req.user || null;
    next();
};

export const onlyPublic = (req, res, next) => {
    if(req.user) {
        res.redirect(routes.home);
    } else {
        next();
    }
};

export const onlyPrivate = (req, res, next) => {
    if(req.user){
        next();
    } else {
        res.redirect(routes.home);
    }
};
