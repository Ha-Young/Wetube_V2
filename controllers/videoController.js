import routes from "../routes"
import Video from "../models/Video"

export const home = async(req, res, next) => {
    try {
        const videos = await Video.find({});
        console.log(videos);
        res.render("home", {pageTitle: "Home", videos});
    } catch(error) {
        console.log(error);
        res.render("home", {pageTitle:"Home", videos:[]})
    }
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

export const postUpload = async (req, res) => {
    try
    {
        const {
            body: {
                title,
                description
            },
            file: {path, size}
        } = req;
    
        const newVideo = await Video.create({
            fileUrl: path,
            title,
            description,
            size
        });
        
        console.log(newVideo);

        res.redirect(routes.videoDetail(newVideo.id));
    }
    catch(error) 
    {
        console.log(error);
    }
    
}

export const videoDetail = (req, res, next) => res.render("videoDetail", {pageTitle: "Video Detail"});

export const editVideo = (req, res, next) => res.render("editVideo", {pageTitle: "Edit Video"});

export const deleteVideo = (req, res, next) => res.render("deleteVideo", {pageTitle: "Delete Video"});
