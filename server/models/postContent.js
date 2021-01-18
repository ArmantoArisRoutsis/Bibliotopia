import mongoose from "mongoose"

const postSchema = mongoose.Schema({
    title:String,
    description:String,
    author:String,
    categories:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type: Date,
        default: new Date
    }
})

const PostContent = mongoose.model('PostContent', postSchema)

export default PostContent;