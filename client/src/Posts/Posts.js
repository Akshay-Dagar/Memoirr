import React, { useEffect } from "react";
import Post from "./Post/Post.js"
import useStyles from "./styles.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { GetPosts } from "../actions/PostsActions.js";

const Posts = () => {
    const classes = useStyles(state => state.Posts);
    const dispatch = useDispatch();
    const posts = useSelector(state => state.Posts);

    useEffect(async () => {
        const action = await GetPosts();              //will get the action to be dispatched
        dispatch(action);
    }, [dispatch])

    console.log(posts);

    return (
        <>
            <h1>Posts</h1>
            <Post />
            <Post />
        </>
    )
}

export default Posts;
