const express = require('express');
const PostController = require('../controllers/post.controller');
const PostRouter = express.Router();

PostRouter.get('/', PostController.getPosts)
PostRouter.post('/', PostController.createPost);

module.exports = PostRouter;