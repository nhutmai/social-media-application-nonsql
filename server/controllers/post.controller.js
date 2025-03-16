const PostServices = require('../services/post.service');

class PostController {
    getAllPosts = PostServices.getAllPosts;
    createPost = PostServices.createPost;
    updatePost = PostServices.updatePost;
    deletePost = PostServices.deletePost;
}

module.exports = new PostController();