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


// 66d5f0e38e7407d3f3d6dc71 main user

// 66d5f0e38e7407d3f3d6dc6b first friend

// 66d5f0e38e7407d3f3d6dc70 seconds friend and delete