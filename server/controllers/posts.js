import PostMessage from "../models/PostMessage.js"

export const GetPosts = async (req,res) => {
    try {
        const Posts = await PostMessage.find();
        res.status(200).json(Posts);
    } 
    catch (error) {
        res.status(404).json(error);
    }
}

export const CreatePost = async (req,res) => {
    try {
        const NewPost = new PostMessage(req.body);
        await NewPost.save();

        res.status(201).json(NewPost);
    } 
    catch (error) {
        res.status(409).json(error);    
    }
}