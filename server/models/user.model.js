const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    name: {
        type: String,
        required: true,
    },
    posts: {
        type: [ mongoose.Schema.Types.ObjectId ],
        ref: 'Post',
        default: []
    }

}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;