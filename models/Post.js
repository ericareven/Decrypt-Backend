const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    name: String,
    username: String,
    post: String,
    date: {type: Date, default: Date.now},
    likes: Number,
    comments: Number,
})

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;