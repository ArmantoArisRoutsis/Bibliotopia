import PostContent from "../models/postContent.js"
import mongoose from "mongoose"


export const getPosts = async (req,res)=>{
    try {
        const postContent = await PostContent.find();
        res.status(200).json(postContent);
    } catch (error) {
        res.status(404).json({message:error})
    }
}

export const createPost = async (req,res)=>{
    const post = req.body

    const newPost = new PostContent(post)

    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message:error})
    }
}

export const updatePost = async (req,res)=>{
    const {id:_id} = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with such id.");

    const updatedPost = await PostContent.findByIdAndUpdate(_id,post,{new:true});

    res.json(updatedPost)
}

export const deletePost = async (req,res) =>{
    const {id} = req.params;
    
    console.log("here")
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with such id.");

    await PostContent.findByIdAndRemove(id);

    res.json("Post Deleted")
}

export const likePost = async (req,res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with such id.");

    const post = await PostContent.findById(id);
    const updatedPost = await PostContent.findByIdAndUpdate(id,{likeCount: post.likeCount + 1},{new:true})

    res.json(updatedPost)
}