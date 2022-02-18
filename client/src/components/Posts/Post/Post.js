import React from "react";
import { Card, CardActions, CardMedia, CardContent, Button, Typography } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import useStyles from "./styles.js";
import moment from "moment";
import { SetPostToBeUpdatedId } from "../../../actions/PostToBeUpdatedIdActions";
import { useDispatch } from "react-redux";

const Post = ({post}) => {                          //will get one prop, the post data
    const classes = useStyles();
    const dispatch = useDispatch();

    const SetAsPostToBeUpdated = () => {
        const action = SetPostToBeUpdatedId(post._id);
        dispatch(action);
    }

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdOn).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button size="small" style={{color: "white"}} onClick={SetAsPostToBeUpdated}>
                    <MoreHorizIcon fontSize = "Default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map(tag => `#${tag} `)}</Typography>
            </div>
            <Typography variant="h5" gutterBottom className={classes.title}>{post.title}</Typography>
            <CardContent>
                <Typography variant="h5" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => {}}>
                    <ThumbUpAltIcon fontSize="small" />
                    Like     {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => {}}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post;