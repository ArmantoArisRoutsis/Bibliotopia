import React from 'react'
import {useHistory, useParams} from "react-router-dom"
import {Grow, Button, CircularProgress} from "@material-ui/core"

import {useDispatch, useSelector} from "react-redux"
import {deletePost, likePost} from "../../actions/posts"

import "./SinglePost.css"
import moment from "moment"

import StarIcon from '@material-ui/icons/Star';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import Modal from "../modal/Modal"


const SinglePost = ({setCurrentId, setShowModal, showModal, currentId}) => {
    const history = useHistory();
    const postId = useParams().id


    const dispatch = useDispatch();
    const posts = useSelector((state)=>state.posts);
    const post = posts.find(post=>post._id === postId)

    const deleteSiglePost = ()=> {
        dispatch(deletePost(post._id))
        history.push("/")
    }


    return (
        !posts.length?<CircularProgress style={{'color': 'white','margin-left':"50%","margin-top":"300px"}}/>:<Grow in><article className="post-container">
            
            <div className="side-content">
                <img data-aos="zoom-in-up" className="post-image" src={post.selectedFile} />
                <div className="buttons">
                    <h5>{moment(post.createdAt).fromNow()} by anonymous user</h5>
                    <h6>{post.categories.map(tag =>`#${tag} `)}</h6>
                    <Button size="small" style={{color:"yellow"}} onClick={()=>dispatch(likePost(post._id))}>
                        <StarIcon/> &nbsp; Favorite &nbsp;{post.likeCount}
                    </Button>
                    <Button size="small" color="secondary" onClick={()=>setShowModal(!showModal)}>
                        <EditIcon/>Edit
                    </Button>
                    <Button size="small" color="secondary" onClick={deleteSiglePost}>
                        <DeleteIcon/>Delete
                    </Button>
                </div>
            </div>
            <div className="main-content">
                <h2>{post.title}</h2>
                <p>{post.description}</p>
            </div>
           <Modal setShowModal={setShowModal} showModal={showModal} setCurrentId={setCurrentId} currentId={currentId}/>
        </article>
        </Grow>
    )
}

export default SinglePost