const express = require('express');
const PostController = require('../controllers/post.controller');
const PostRouter = express.Router();

PostRouter.get('/', PostController.getAllPosts);
PostRouter.post('/', PostController.createPost);
PostRouter.put('/:id', PostController.updatePost);
PostRouter.delete('/:id', PostController.deletePost);

module.exports = PostRouter;