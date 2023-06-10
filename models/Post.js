const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    username: String,
    post: String,
    date: {type: Date, default: Date.now},
    likes: Number,
    recrypts: Number,
    comments: Number,
},
    // {
    //     timestamps: true,
    // }
)

module.exports = Post = mongoose.model("Post", PostSchema);