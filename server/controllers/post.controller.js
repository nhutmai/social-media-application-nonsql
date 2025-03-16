const Post = require("../models/post.model");
const User = require("../models/user.model");

class PostController {
    async createPost(req, res) {
        try {
            const {title, content, userId} = req.body;

            //create post
            const newPost = await Post.insertOne({title, content, user: userId});

            //update userPost
            await User.findByIdAndUpdate(userId, {
                $push: {posts: newPost._id}
            })

            return res.status(201).json({
                success: true,
                post: newPost
            })

        } catch (error) {
            console.log(error);
            return res.status(500).json({message: error.message});
        }
    }

    async getPosts(req, res) {
        try {
            const {page, limit, orderBy = 'createdAt', sortBy = -1} = req.query;
            const offset = (page - 1) * limit;

            const posts = await Post.find({})
                .limit(limit)
                .skip(offset)
                .select('content title user')
                .populate('user')
                .sort({[orderBy]: sortBy});

            return res.status(200).json({
                success: true,
                posts
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: error.message});
        }

    }
}

module.exports = new PostController();