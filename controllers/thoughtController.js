const { Thought, User, Reaction } = require('../models');

// Define the thoughtController object

// get all thoughts
const thoughtController = {
  async getAllThoughts(req, res) {
    try {
      const dbThoughtData = await Thought.find({});
      res.json(dbThoughtData);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },

  // get one thought by id
  async getThoughtById({ params }, res) {
    try {
      const dbThoughtData = await Thought.findOne({ _id: params.id });
      // If no thought is found, send 404
      if (!dbThoughtData) {
        res.status(404).json({ message: 'No thought found with this id!' });
        return;
      }
      // Otherwise, send the data
      res.json(dbThoughtData);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },

  // create thought
  async createThought({ body }, res) {
    try {
      // Create a thought
      const dbThoughtData = await Thought.create(body);
      // Find the user associated with the thought
      const dbUserData = await User.findOneAndUpdate(
        { _id: body.userId },
        { $push: { thoughts: dbThoughtData._id } },
        { new: true }
      );
      // If no user is found, send 404
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      // Otherwise, send the data
      res.json(dbThoughtData);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },

  // update thought by id
  async updateThought({ params, body }, res) {
    try {
      // By setting the parameter new: true, we're instructing Mongoose to return the new version of the document.
      const dbThoughtData = await Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true });
      // If no thought is found, send 404
      if (!dbThoughtData) {
        res.status(404).json({ message: 'No thought found with this id!' });
        return;
      }
      // Otherwise, send the data
      res.json(dbThoughtData);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },

  // delete thought by id
  async deleteThought({ params }, res) {
    try {
      // Delete the thought
      const dbThoughtData = await Thought.findOneAndDelete({ _id: params.id });
      // If no thought is found, send 404
      if (!dbThoughtData) {
        res.status(404).json({ message: 'No thought found with this id!' });
        return;
      }
      // Find the user associated with the thought
      const dbUserData = await User.findOneAndUpdate(
        { _id: dbThoughtData.userId },
        { $pull: { thoughts: params.id } },
        { new: true }
      );
      // If no user is found, send 404
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      // Otherwise, send the data
      res.json(dbThoughtData);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },

  // add reaction to thought
  async addReaction({ params, body }, res) {
    try {
      // Create a reaction
      const dbReactionData = await Reaction.create(body);
      // Find the thought associated with the reaction
      const dbThoughtData = await Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $push: { reactions: dbReactionData._id } },
        { new: true }
      );
      // If no thought is found, send 404
      if (!dbThoughtData) {
        res.status(404).json({ message: 'No thought found with this id!' });
        return;
      }
      // Otherwise, send the data
      res.json(dbReactionData);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },

  // delete reaction from thought
  async deleteReaction({ params }, res) {
    try {
      // Delete the reaction
      const dbReactionData = await Reaction.findOneAndDelete({ _id: params.reactionId });
      // If no reaction is found, send 404
      if (!dbReactionData) {
        res.status(404).json({ message: 'No reaction found with this id!' });
        return;
      }
      // Find the thought associated with the reaction
      const dbThoughtData = await Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $pull: { reactions: params.reactionId } },
        { new: true }
      );
      // If no thought is found, send 404
      if (!dbThoughtData) {
        res.status(404).json({ message: 'No thought found with this id!' });
        return;
      }
      // Otherwise, send the data
      res.json(dbReactionData);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  }
}

// Export the thoughtController object
module.exports = thoughtController;