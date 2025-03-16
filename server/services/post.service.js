const Post = require('../models/post.model');
const User = require('../models/user.model');

class PostService {
    async getAllPosts(req, res) {
        try {
            const {page = 1, limit = 10, orderBy = 'createdAt', sortBy = -1} = req.query;
            const offset = (page - 1) * limit;

            const posts = await Post.find({})
                .limit(limit)
                .skip(offset)
                .select('content title user')
                .populate('user')
                .sort({[orderBy]: +sortBy});

            return res.status(200).json({
                success: true,
                posts
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: error.message});
        }
    }


    async createPost(req, res) {
        try {
            const {title, content, userId} = req.body;
            const newPost = await Post.insertOne({title, content, user: userId});

            await User.findByIdAndUpdate(userId, {
                $push: {posts: newPost._id}
            });

            return res.status(201).json({
                success: true,
                post: newPost
            });

        } catch (error) {
            console.log(error);
            return res.status(500).json({message: error.message});
        }
    }

    async updatePost(req, res) {
        try {
            const {id} = req.params;
            const updateData = req.body;
            const updatedPost = await Post.findByIdAndUpdate(id, updateData);
            return res.status(200).json({
                success: true,
                post: await Post.findById(updatedPost._id)
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: error.message});
        }
    }

    async deletePost(req, res) {
        try {
            const {id} = req.params;
            await Post.findByIdAndDelete(id);
            return res.status(200).json({
                success: true,
                message: 'Post deleted successfully.'
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: error.message});
        }
    }
}

module.exports = new PostService();