const { ObjectId } = require("mongoose").Types;
const { json } = require("sequelize");
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
      const user = await User.findOneandUpdate(
        { _id: req.params.uderId },
        { $sest: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        res.status(404).json({ messge: "User not found!" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // delete a user and thoughts
  async deleteUser(req, res) {
    try {
      const user = await User.findOneandRemove({ _id: req.params.userId });

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
};
