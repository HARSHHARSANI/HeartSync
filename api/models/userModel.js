const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  datingType: [
    {
      type: String,
      required: true,
    },
  ],
  lookingFor: {
    type: String,
    required: true,
  },
  homeTown: {
    type: String,
    required: true,
  },
  imageUrls: [
    {
      type: String,
    },
  ],
  prompts: [
    {
      question: {
        type: String,
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
    },
  ],
  likedProfiles: [
    {
      type: ObjectId,
      ref: 'User',
    },
  ],
  receivedLikes: [
    {
      userId: {
        type: ObjectId,
        ref: 'User',
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
      },
    },
  ],
  matches: [
    {
      type: ObjectId,
      ref: 'User',
    },
  ],
  blockedUsers: [
    {
      type: ObjectId,
      ref: 'User',
    },
  ],
  messages: [
    {
      message: {
        type: String,
        required: true,
      },
      sender: {
        type: ObjectId,
        ref: 'User',
        required: true,
      },
      receiver: {
        type: ObjectId,
        ref: 'User',
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
