import React from 'react'
import {Button} from "@material-ui/core"
import {useHistory} from "react-router-dom"

import moment from "moment"

import StarIcon from '@material-ui/icons/Star';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"

import {useDispatch} from "react-redux"
import {deletePost, likePost} from "../../../actions/posts"

import "./Post.css"

const Post = ({post,setCurrentId, setShowModal}) => {
    const dispatch = useDispatch();
    const history = useHistory()

    const handleViewPost = (e) =>{
        e.preventDefault();
        setCurrentId(post._id)
        history.push(`/post/${post._id}`)
    } 


    return (
        <article className="post-card-container">
            <img src={post.selectedFile}/>
            <div className="creation-info">
                <h4>{moment(post.createdAt).fromNow()}</h4>
                <h5>{post.author}</h5>
            </div>
            <div className="overlay"></div>
            <div className="card-content">
                <h3>{post.title}</h3>
                <h5>{post.categories.map(tag =>`#${tag} `)}</h5>
                <p>
                    {post.description && post.description.length>150?post.description.substring(0,150)+"...":post.description}<a href="" className="view-more" onClick={handleViewPost}> View More</a>
                    <div className="card-buttons">
                        <Button size="small" color="primary" style={{color:"FF2D00"}} onClick={()=>dispatch(likePost(post._id))}>
                            <StarIcon/> &nbsp; Favorite &nbsp;{post.likeCount}
                        </Button>
                        <Button size="small" color="primary" style={{color:"brown"}} onClick={()=>dispatch(deletePost(post._id))}>
                            <DeleteIcon/>Delete
                        </Button>
                    </div>
                </p>

            </div>
        </article>
    )
}

export default Post
