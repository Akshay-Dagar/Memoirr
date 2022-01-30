import React from "react";
import useStyles from "./styles.js";
import { useState } from "react";
import { TextField, Typography, Paper, Button } from "@material-ui/core";
import FileBase from "react-file-base64";
import { CreatePost } from "../../actions/PostsActions.js";
import { useDispatch } from "react-redux";

const Form = () => {
    const classes = useStyles();
    const initialState = {creator: "", title: "", message: "", tags: "", selectedFile: ""};
    const [newPostData, setNewPostData] = useState(initialState);
    const dispatch = useDispatch();

    const onSubmit = async e => {
        e.preventDefault();                                     //prevents page refresh on submit

        const action = await CreatePost(newPostData);
        dispatch(action);
    }

    const clearForm = e => {
        e.preventDefault();
        setNewPostData(initialState);
    }

    return (
        <Paper className={classes.paper}>
            <form action="" autoComplete="off" noValidate className={`${classes.root} ${classes.Form}`} onSubmit={onSubmit}>
                <Typography variant="h4">Create a Memoir</Typography>
                <TextField name="creator" variant="outlined" label="creator" fullWidth value={newPostData.creator} onChange={e => setNewPostData({...newPostData, creator: e.target.value})} />
                <TextField name="title" variant="outlined" label="title" fullWidth value={newPostData.title} onChange={e => setNewPostData({...newPostData, title: e.target.value})} />
                <TextField name="message" variant="outlined" label="message" fullWidth value={newPostData.message} onChange={e => setNewPostData({...newPostData, message: e.target.value})} />
                <TextField name="tags" variant="outlined" label="tags" fullWidth value={newPostData.tags} onChange={e => setNewPostData({...newPostData, tags: e.target.value})} />
                <div className={classes.fileInput}>
                    <FileBase 
                        type = "file"
                        multiple = {false}
                        onDone = {({base64}) => setNewPostData({...newPostData, selectedFile: base64})}        //file will be converted to a base 64 string by the component automatically. 
                    />
                </div>
                <Button className={classes.buttonSubmit} type="submit" variant="contained" color="primary" size="large" fullWidth>Submit</Button>
                <Button onClick={clearForm} variant="contained" color="secondary" size="small" fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;