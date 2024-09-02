const { Thought } = require("../models");

module.exports = {
  //get all thoughts
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // get one thought
  async getOneThought(req, res) {
    try {
      const thought = await Thought.findOne({
        _id: req.params.thoughtId,
      }).select("-__v");

      if (!thought) {
        return (
          res.status(404).json({ message: "Smooooth brain, no thought found!" })
        );
      }

      res.json(thought);

    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // create a thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  //update a thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        res.status(404).json({ message: "Smooooth brain, no thought found!" });
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  //delete a thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate({
        _id: req.params.thoughtId,
      });

      if (!thought) {
        res.status(404).json({ message: "Smooooth brain, no thought found!" });
      }
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // add a reaction
  async addReaction(req, res) {
    try {
      const reaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if (!reaction) {
        return (
          res.status(404).json({ messgae: "Failed to add reaction. No thought with that Id!" })
        );
      }
      res.json(reaction);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  //delete a reaction
  async deleteReaction(req, res) {
    try {
      const xreaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!xreaction) {
        return res
          .status(404)
          .json({
            messaage: "Failed to delete reaction. No thought with that Id!",
          });
      }
    
      res.json({message: 'Reaction has been deleted!'});
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};
