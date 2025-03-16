const express = require('express');
const UserController = require('../controllers/user.controller');
const UserRouter = express.Router();

UserRouter.get('/', UserController.getAllUsers);
UserRouter.post('/', UserController.createUser);
UserRouter.put('/:id', UserController.updateUser);
UserRouter.delete('/:id', UserController.deleteUser);

module.exports = UserRouter;