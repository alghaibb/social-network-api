const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: 'Username is Required',
      trim: true
    },

    email: {
      type: String,
      unique: true,
      required: true,
      validate: {
        // use regex to validate email
        validator: function (v) {
          // regex from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
        },
      }
    },

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ]
  },
  {
    // use toJSON to tell schema it can use virtuals
    toJSON: {
      virtuals: true
    },
    id: false
  }
)

// get total count of friends on retrieval
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// create the User model using the UserSchema
const User = model('User', userSchema);

module.exports = User;

