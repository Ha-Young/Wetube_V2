import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'HaTube';
    res.locals.routes = routes;
    next();
};