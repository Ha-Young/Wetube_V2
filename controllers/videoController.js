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

export const videoDetail = async (req, res, next) => {
    const {
        params:{id}
    } = req;
    try{
        const video = await Video.findById(id);
        res.render("videoDetail", {pageTitle: video.title, video});
    }catch(error){
        console.log(error);
        res.redirect(routes.home);
    }
}

export const getEditVideo = async(req, res, next) => {
    const {
        params:{id}
    } = req;

    try {
        const video = await Video.findById(id);
        res.render("editVideo", {pageTitle: `Edit ${video.title}`, video});
    } catch(error) {
        console.log(error);
        res.redirect(routes.home);
    }

}

export const postEditVideo = async(req, res) => {
    const {
        params:{id},
        body:{title, description}
    } = req;

    try {
        await Video.findOneAndUpdate({_id:id}, {title, description});
        res.redirect(routes.videoDetail(id));
    }catch(error) {
        console.log(error);
        res.redirect(routes.home);
    }
}

export const deleteVideo = async(req, res, next) => {
    const {
        params:{id}
    }

    try {
        await Video.findOneAndRemove({_id:id});
    }catch(error){
        console.log(error);
    }
    res.redirect(routes.home);
}