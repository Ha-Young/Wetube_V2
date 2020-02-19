export const home = (req, res, next) => res.render("home", {pageTitle: "Home"})

export const search = (req, res, next) => {
    const {
        query : {
            term : searchingBy
        }
    } = req;
    res.render("search", {pageTitle: "Search", searchingBy});

}
export const video = (req, res, next) => res.render("videos", {pageTitle: "Video"});

export const upload = (req, res, next) => res.render("upload", {pageTitle: "Upload"});

export const videoDetail = (req, res, next) => res.render("videoDetail", {pageTitle: "Video Detail"});

export const editVideo = (req, res, next) => res.render("editVideo", {pageTitle: "Edit Video"});

export const deleteVideo = (req, res, next) => res.render("deleteVideo", {pageTitle: "Delete Video"});
