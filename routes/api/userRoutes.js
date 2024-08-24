const router = require("express").Router();

const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controller/userController.js");

// /api/users
router.route("/users").get(getAllUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getOneUser).put(updateUser).delete(deleteUser);

// /api/user/:userId/friends/:friendId
router.route("/users/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
