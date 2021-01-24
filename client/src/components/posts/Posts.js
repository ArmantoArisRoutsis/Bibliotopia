import React from 'react'
import {useSelector} from "react-redux"
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./Post/Post"
import useStyles from "./styles"
import Modal from "../modal/Modal"


const Posts = ({setCurrentId,setShowModal,showModal,currentId}) => {
    const classes = useStyles();
    const posts = useSelector((state)=>state.posts);

    return (
        !posts.length?<CircularProgress/>:<><Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {
                posts.map((post)=>(
                    <Grid key={post._id} item sm={12} md={6}>
                        <Post post={post} setCurrentId={setCurrentId} setShowModal={setShowModal}/>
                    </Grid>
                ))
            }
        </Grid>
        <Modal setShowModal={setShowModal} showModal={showModal} setCurrentId={setCurrentId} currentId={currentId}/>
        </>
    )
}

export default Posts
