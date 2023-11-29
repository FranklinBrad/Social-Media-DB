const { User, thought, Thought } = require("../models");

const thoughtController =  {
  // Get all thoughts
  async getthoughts(req, res) {
    try {
      const thoughts = await thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a thought
  async getSinglethought(req, res) {
    try {
      const thought = await thought.findOne({
        _id: req.params.thoughtId,
      }).select("-__v");
      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a thought
  async createthought(req, res) {
    try {
      const thought = await thought.create(req.body)
      const userData = await User.findOneAndUpdate(
        { _id: body.userId },
        { $push: { thoughts: thought._id } },
        { new: true }
      );
  
      res.json(userData);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a thought
  async deletethought(req, res) {
    try {
      const thought = await thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });

      if (!thought) {
        res.status(404).json({ message: "No thought with that ID" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a thought
  async updatethought(req, res) {
    try {
      const thought = await thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        res.status(404).json({ message: "No thought with this id!" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
   // Create a reaction
  async createReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: body.thoughtId },
        { $push: { reactions: req.body } },
        { new: true }
      );
  
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  async deletethought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: body.thoughtId },
        { $push: { reactions:{ reactionId: req.params.reactionId} } },
        { new: true }
      );
  
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};


 


module.exports = thoughtController