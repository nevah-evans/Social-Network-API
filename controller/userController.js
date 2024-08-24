const { User, Thought } = require("../models");

module.exports = {
  // get all users
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  //get one user
  async getOneUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).select(
        "-__v"
      );

      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  //create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req, body);
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  //update user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        res.status(404).json({ messge: "User not found!" });
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // delete a user and thoughts
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndRemove({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }

      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      res.json({ message: "User and thoughts deleted!" });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  //add a friend
  async addFriend(req, res) {
    try {
      const friend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!friend) {
        return res
          .status(404)
          .json({ message: "Failed to add friend. No user with that Id!" });
      }
      res.json(friend);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  //delete a friend
  async deleteFriend(req, res) {
    try {
      const xfriend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!xfriend) {
        return res
          .status(404)
          .json({ message: "Failed to delete friend. No user with that Id!" });
      }

      res.json(xfriend);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};
