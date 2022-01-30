import Express from "express";
import {GetPosts, CreatePost, UpdatePost} from "../controllers/posts.js";

const router = Express.Router();

router.get("/", GetPosts);
router.post("/", CreatePost);
router.patch("/", UpdatePost);         //used to update existing data, will update post with id given as a url query parameter (using ?)

export default router;