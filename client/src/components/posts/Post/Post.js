import React from 'react'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core"

import useStyles from "./styles"
import moment from "moment"

import StarIcon from '@material-ui/icons/Star';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"

import {useDispatch} from "react-redux"
import {deletePost, likePost} from "../../../actions/posts"

const Post = ({post,setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.author}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color:'white'}} size="small" onClick={()=>setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="default"/> 
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color ="textSecondary">{post.categories.map(tag =>`#${tag} `)}</Typography>
            </div>
                <Typography variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" gutterBottom>{post.description && post.description.length>150?post.description.substring(0,150)+"...":post.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={()=>dispatch(likePost(post._id))}>
                    <StarIcon/> &nbsp; Favorite &nbsp;{post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={()=>dispatch(deletePost(post._id))}>
                    <DeleteIcon/>Delete
                </Button>
            </CardActions>
            

        </Card>
    )
}

export default Post

