import React,{useState, useEffect} from 'react'
import {useHistory} from "react-router-dom"

import {useDispatch, useSelector} from "react-redux"
import {createPost, updatePost} from "../../actions/posts"

import FileBase from "react-file-base64"

import useStyles from "./styles"
import {TextField, Button, Typography,Paper} from "@material-ui/core"

const Form = ({currentId,setCurrentId,showClear,setShowModal}) => {
    const [postData,setPostData] = useState({
        author:"",
        title:"",
        description:"",
        categories:"",
        selectedFile:""
    })
    const classes = useStyles();

    const dispatch = useDispatch();
    const post = useSelector(state => currentId? state.posts.find(p=>p._id === currentId):null)
    
    const history = useHistory();


    useEffect(() => {
        if(post) setPostData(post)
    }, [post])

    const handleSubmit =(e)=>{
        e.preventDefault();
        setShowModal(false)

        if(currentId){
            dispatch(updatePost(currentId,postData)) 
        }else{
            dispatch(createPost(postData))
            history.push("/")
        }
        clear()
    }

    const clear =()=>{
        setCurrentId(null)
        setPostData({author:"",title:"",description:"",categories:"",selectedFile:""})
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId?"Edit your":"Add a"} book recomendation</Typography>
                <TextField name="title" variant="outlined" label="Book Title" fullWidth value={postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})}/>
                <TextField name="author" variant="outlined" label="Author" fullWidth value={postData.author} onChange={(e)=>setPostData({...postData,author:e.target.value})}/>
                <TextField name="description" multiline rows={2} rowsMax={4} variant="outlined" label="Book Description" fullWidth value={postData.description} onChange={(e)=>setPostData({...postData,description:e.target.value})}/>
                <TextField name="categories" variant="outlined" label="Categories" fullWidth value={postData.categories} onChange={(e)=>setPostData({...postData,categories:e.target.value.split(",")})}/>
                <div classes={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile:base64})}/>
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>{currentId?"Save Changes":"Add Book"}</Button>
                    {showClear&&<Button variant="contained" color="secondary" size="small" fullWidth onClick={clear}>Clear Fields</Button>}
                </div>
            </form>
        </Paper>
    )
}

export default Form
