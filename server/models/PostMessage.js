import Mongoose from "mongoose"

const PostSchema = Mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdOn: {
        type: String,
        default: new Date()
    }
})

const PostMessage = Mongoose.model("PostMessage",PostSchema);
export default PostMessage;