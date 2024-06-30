import mongoose from "mongoose";


const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    summary :{
        type:String,
        required:false
    },
    content:{
        type:String,
        required:false
    },
    imageUrl:{
        type:String
    },
    username:{
        type:String,
        required:false
    }
},{timestamps:true});


const Post = mongoose.model("Post",PostSchema);
export default Post;