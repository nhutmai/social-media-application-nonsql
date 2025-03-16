const User = require('../models/user.model');

class UserService {
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

    async updateUser(req, res) {
        try {
            const {id} = req.params;
            const updateData = req.body;
            const userUpdated = await User.findByIdAndUpdate(id, updateData);
            return res.status(200).json({
                success: true,
                user: await User.findById(userUpdated._id)
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: error.message});
        }
    }

    async deleteUser(req, res) {
        try {
            const {id} = req.params;
            await User.findByIdAndDelete(id);
            return res.status(200).json({
                success: true,
                message: 'User deleted successfully.'
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: error.message});
        }
    }
}

module.exports = new UserService();