import Express from "express";
import {GetPosts, CreatePost} from "../controllers/posts.js";

const router = Express.Router();

router.get("/", GetPosts)
router.post("/", CreatePost)

export default router;