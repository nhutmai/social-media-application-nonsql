const express = require("express");
const UserRouter = require("./user.router");
const PostRouter = require("./post.router");

const router = express.Router();

router.use("/users", UserRouter);
router.use("/posts", PostRouter)

module.exports = router;