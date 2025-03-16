const UserService = require('../services/user.service');

class UserController {
    getAllUsers = UserService.getAllUsers;
    createUser = UserService.createUser;
    updateUser = UserService.updateUser;
    deleteUser = UserService.deleteUser;
}

module.exports = new UserController();