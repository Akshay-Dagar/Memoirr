import React, { useEffect, useState } from "react";
import Post from "./Post/Post.js"
import useStyles from "./styles.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { GetPosts } from "../../actions/PostsActions.js";
import { Grid, CircularProgress, Divider } from "@material-ui/core";

const Posts = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const posts = useSelector(state => state.Posts);        //re-rendering happens everytime posts changes.
    var isLoadingPosts = false;

    useEffect(async () => {
        isLoadingPosts = true;

        const action = await GetPosts();              //will get the action to be dispatched
        dispatch(action);

        isLoadingPosts = false;
    }, [dispatch])

    return (
        isLoadingPosts ? <CircularProgress /> :
        !posts.length ? <div>No Posts to show.</div> : 
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {posts.map(post => (
                <Grid key={post._id} item xs={12} sm={6}>
                    <Post post={post}/> 
                </Grid>
            ))}
        </Grid>
    )
}

export default Posts;
