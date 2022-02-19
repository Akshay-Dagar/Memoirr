import mongoose from "mongoose";
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

export const UpdatePost = async (req,res) => {
    try {
        const id = req.query.id;                   //query contains the query parameters (specified using ?)

        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).json("No post with this id.");

        const updatedPost = await PostMessage.findByIdAndUpdate(id, {...req.body, id}, {new: true});    //req.body from the client side only contains title, message, tags, creator etc. but no id
        res.status(201).json(updatedPost);    
    }
    catch (error) {
        res.status(409).json(error);    
    }
}

export const DeletePost = async (req,res) => {
    try {
        const id = req.query.id;                   //query contains the query parameters (specified using ?)

        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).json("No post with this id.");

        await PostMessage.findByIdAndRemove(id);    //req.body from the client side only contains title, message, tags, creator etc. but no id
        res.status(201).json("Successfully deleted post");
    }
    catch (error) {
        res.status(409).json(error);
    }
}

export const LikePost = async (req,res) => {
    try {
        const id = req.query.id;                   //query contains the query parameters (specified using ?)

        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).json("No post with this id.");

        const post = await PostMessage.findById(id);
        const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, {new: true});    //req.body from the client side only contains title, message, tags, creator etc. but no id
        res.status(201).json(updatedPost);
    }
    catch (error) {
        res.status(409).json(error);
    }
}