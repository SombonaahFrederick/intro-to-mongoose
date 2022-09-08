const router = require("express").Router;
const {
  createUser,
  deleteUser,
  getUser,
  updateUser,
  getUsers,
} = require("../controllers/users.controller");

const userRouter = router();

userRouter.route("/").post(createUser).get(getUsers);
userRouter.route("/:UserId").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = userRouter;
