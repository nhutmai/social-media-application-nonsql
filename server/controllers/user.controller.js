const User = require('../models/user.model');

class UserController {

    async createUser(req, res) {
        try {

            const {email, name} = req.body;
            const newUser = await User.insertOne({email, name});
            return res.status(201).json({
                success: true,
                user: newUser
            });

        } catch (error) {
            console.log(error);
            return res.status(500).json({message: error.message});
        }
    }

    async getAllUsers(req, res) {
        try {
            const {page, limit, orderBy = 'createdAt', sortBy = -1} = req.query;
            const offset = (page - 1) * limit;
            const users = await User
                .find({})
                .skip(offset)
                .limit(limit)
                .populate('posts')
                .select('email name posts')
                .sort({[orderBy]: +sortBy === 0 ? -1 : +sortBy});

            return res.status(200).json({
                success: true,
                users
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: error.message});
        }
    }
}

module.exports = new UserController();