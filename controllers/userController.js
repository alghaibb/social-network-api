const { User } = require('../models');

const userController = {
  // get all users
  getAllUser(req, res) {
    User.find({})
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .select('-__v')
      // .sort({ _id: -1 })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one user by id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .select('-__v')
      // .sort({ _id: -1 })
      .then(dbUserData => {
        // If no user is found, send 404
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        // Otherwise, send the data
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // create user
  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  },

  // update user by id
  updateUser({ params, body }, res) {
    // By setting the parameter new: true, we're instructing Mongoose to return the new version of the document.
    User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .then(dbUserData => {
        // If no user is found, send 404
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        // Otherwise, send the data
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  // delete user
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then(dbUserData => {
        // If no user is found, send 404
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        // Otherwise, send the data
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  // add friend
  addFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      // $addToSet is like $push, except it only adds the friend if it doesn't already exist
      { $addToSet: { friends: params.friendId } },
      { new: true }
    )
      .then(dbUserData => {
        // If no user is found, send 404
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        // Otherwise, send the data
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  // remove friend
  removeFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      // $pull is the opposite of $push; it removes the specified data from an array
      { $pull: { friends: params.friendId } },
      { new: true }
    )
      .then(dbUserData => {
        // If no user is found, send 404
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        // Otherwise, send the data
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  }
}

module.exports = userController;

