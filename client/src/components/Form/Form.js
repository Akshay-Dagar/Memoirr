import React, { useEffect } from "react";
import useStyles from "./styles.js";
import { useState } from "react";
import { TextField, Typography, Paper, Button } from "@material-ui/core";
import FileBase from "react-file-base64";
import { CreatePost, UpdatePost } from "../../actions/PostsActions.js";
import { useDispatch, useSelector } from "react-redux";
import { SetPostToBeUpdatedId } from "../../actions/PostToBeUpdatedIdActions.js";

const Form = () => {
    const classes = useStyles();
    const initialState = {creator: "", title: "", message: "", tags: "", selectedFile: ""};
    const [postData, setPostData] = useState(initialState);
    const dispatch = useDispatch();

    const postToBeUpdatedId = useSelector(state => state.PostToBeUpdatedId);
    const postToBeUpdated = useSelector(state => postToBeUpdatedId ? state.Posts.find(post => post._id === postToBeUpdatedId ? post : null) : null);               //Find post to be updated from posts by using the id

    useEffect(() => {
        if (postToBeUpdated)
            setPostData(postToBeUpdated);
    }, [postToBeUpdatedId, postToBeUpdated]);

    const onSubmit = async e => {
        e.preventDefault();                                     //prevents page refresh on submit

        if(postToBeUpdatedId) {
            const action = await UpdatePost(postToBeUpdatedId, postData);
            dispatch(action);
        }
        else {
            const action = await CreatePost(postData);
            dispatch(action);
        }
        clearForm();
    }

    const clearForm = e => {
        if (e)
            e.preventDefault();
        const action = SetPostToBeUpdatedId(null);
        dispatch(action);
        setPostData(initialState);
    }

    return (
        <Paper className={classes.paper}>
            <form action="" autoComplete="off" noValidate className={`${classes.root} ${classes.Form}`} onSubmit={onSubmit}>
                <Typography variant="h4">{postToBeUpdatedId ? "Edit" : "Create"} a Memoir</Typography>
                <TextField name="creator" variant="outlined" label="creator" fullWidth value={postData.creator} onChange={e => setPostData({...postData, creator: e.target.value})} />
                <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={e => setPostData({...postData, title: e.target.value})} />
                <TextField name="message" variant="outlined" label="message" fullWidth value={postData.message} onChange={e => setPostData({...postData, message: e.target.value})} />
                <TextField name="tags" variant="outlined" label="tags" fullWidth value={postData.tags} onChange={e => setPostData({...postData, tags: e.target.value})} />
                <div className={classes.fileInput}>
                    <FileBase 
                        type = "file"
                        multiple = {false}
                        onDone = {({base64}) => setPostData({...postData, selectedFile: base64})}        //file will be converted to a base 64 string by the component automatically. 
                    />
                </div>
                <Button className={classes.buttonSubmit} type="submit" variant="contained" color="primary" size="large" fullWidth>Submit</Button>
                <Button onClick={clearForm} variant="contained" color="secondary" size="small" fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;