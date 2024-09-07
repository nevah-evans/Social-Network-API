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
router.route("/").get(getAllUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getOneUser).put(updateUser).delete(deleteUser);

// /api/user/:userId/friends
router.route("/:userId/friends").post(addFriend)

// /api/user/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(deleteFriend);

module.exports = router;


// 66db9ddb068d7db8bf2f5a0c

// 66d617e63527369527f27b46