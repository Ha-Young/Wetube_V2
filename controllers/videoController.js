import routes from "../routes"

export const home = (req, res, next) => 
{
    res.render("home", {pageTitle: "Home", videos})
}
export const search = (req, res, next) => {
    const {
        query : {
            term : searchingBy
        }
    } = req;
    res.render("search", {pageTitle: "Search", searchingBy, videos});
}
export const video = (req, res, next) => res.render("videos", {pageTitle: "Video"});

export const getUpload = (req, res, next) => 
    res.render("upload", {pageTitle: "Upload"});

export const postUpload = (req, res) => {
    const {
        body: {
            file,
            title,
            description
        }
    } = req;
    // To Do: Upload and save video
    res.redirect(routes.videoDetail(23342));
}

export const videoDetail = (req, res, next) => res.render("videoDetail", {pageTitle: "Video Detail"});

export const editVideo = (req, res, next) => res.render("editVideo", {pageTitle: "Edit Video"});

export const deleteVideo = (req, res, next) => res.render("deleteVideo", {pageTitle: "Delete Video"});
