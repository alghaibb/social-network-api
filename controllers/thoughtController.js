const { Thought, User, Reaction } = require('../models');

const { Types } = require('mongoose');

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
  async getThoughtById(req, res) {
    try {
      const thoughtId = req.params.thoughtId;
      console.log('Recieved thoughtId:', thoughtId)

      const dbThoughtData = await Thought.findOne({ _id: req.params.thoughtId });
      console.log('Retrieved thought from the database:', dbThoughtData);

      if (!dbThoughtData) {
        console.log('Thought not found');
        return res.status(404).json({ message: 'Thought not found' });
      } else {
        return res.json(dbThoughtData);
      }
    } catch (err) {
      console.error('Error while retrieving thought:', err);
      return res.status(500).json(err);
    }
  },

  // Handler for the "create thought" API endpoint
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.status(201).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // create thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.status(201).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // update thought by id
  async updateThought(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {
        new: true,
      });
      if (!thought) {
        res.status(404).json({ message: 'Thought not found' });
      } else {
        res.json(thought);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // delete thought by id
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findByIdAndDelete({ _id: req.params.thoughtId });
      res.status(200).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // add reaction to thought
  async addReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );
      thought ? res.json(thought) : res.status(404).json({ message: notFound });
    } catch (e) {
      res.status(500).json(e);
    }
  },

  // delete reaction from thought
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      thought ? res.json(thought) : res.status(404).json({ message: notFound });
    } catch (e) {
      res.status(500).json(e);
    }
  },
}

// Export the thoughtController object
module.exports = thoughtController;