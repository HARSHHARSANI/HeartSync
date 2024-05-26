const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const {Server} = require('socket.io');
const crypto = require('crypto');
const userModel = require('./models/userModel.js');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const server = http.createServer(app);
const io = new Server(server);

mongoose
  .connect('mongodb://localhost:27017/hinge')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.log(error);
  });

app.post('/register', async (req, res) => {
  try {
    const {userData} = req.body;

    // Transform the date fields to a Date object
    const dateOfBirth = new Date(
      userData.year,
      userData.month - 1,
      userData.day,
    );

    // Transform the incoming data to fit the schema
    const newUser = new userModel({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      dateOfBirth,
      gender: userData.gender,
      location: userData.location,
      type: userData.type,
      datingType: userData.DatingType,
      lookingFor: userData.lookingFor,
      homeTown: userData.homeTown,
      imageUrls: userData.imgUrls.filter(url => url),
      prompts: userData.prompts,
      likedProfiles: [],
      receivedLikes: [],
      matches: [],
      blockedUsers: [],
      messages: [],
    });

    await newUser.save();

    const secretKey = crypto.randomBytes(32).toString('hex');
    const token = jwt.sign({id: newUser._id}, secretKey);
    res.status(200).json({
      message: 'User registered successfully',
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Server error'});
  }
});

app.get('/users/:userId', async (req, res) => {
  try {
    const {userId} = req.params;
    const user = await userModel.findById(userId);
    if (!user) return res.status(404).json({message: 'User not found'});

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Error in fetching user'});
  }
});

app.post('/login', async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await userModel
      .findOne({email, password})
      .select('_id')
      .lean();

    if (!user) return res.status(404).json({message: 'Invalid credentials'});

    const secretKey = crypto.randomBytes(32).toString('hex');

    const token = jwt.sign({id: user._id}, secretKey);

    res.status(200).json({message: 'Login successful', token});
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Server error'});
  }
});

//matches
app.get('/matches', async (req, res) => {
  try {
    const {userId} = req.query;
    const user = await userModel.findById(userId);
    if (!user)
      return res.status(404).json({
        message: 'User not found',
      });

    let filter = {};

    if (user.gender === 'Men') {
      filter.gender = 'Women';
    } else if (user.gender === 'Women') {
      filter.gender = 'Men';
    }

    let query = {
      _id: {$in: user.matches},
    };

    if (user.type) {
      filter.type = user.type;
    }

    const currentUser = await userModel
      .findById(userId)
      .populate('matches', '_id')
      .populate('likedProfiles', '_id');

    const friends = currentUser.matches.map(friend => friend._id);

    const crushIds = currentUser.likedProfiles.map(crush => crush._id);

    // console.log('filter', filter);

    //fetch Matches based on filter

    const matches = await userModel
      .find()
      .where('_id')
      .nin([userId, ...friends, ...crushIds]);

    return res.status(200).json({matches});
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Server error'});
  }
});

app.post('/like-profile', async (req, res) => {
  try {
    const {userId, likedUserId, image, comment} = req.body;

    await userModel.findByIdAndUpdate(likedUserId, {
      $push: {receivedLikes: {userId, image, comment}},
    });

    await userModel.findByIdAndUpdate(userId, {
      $push: {likedProfiles: likedUserId},
    });

    res.status(200).json({message: 'Liked profile'});
  } catch (error) {
    console.error('Error liking profile:', error);
    res.status(500).json({message: 'Internal server error'});
  }
});

app.get('/received-likes/:userId', async (req, res) => {
  try {
    const {userId} = req.params;

    const likes = await User.findById(userId)
      .populate('receivedLikes.userId', 'firstName imageUrls prompts')
      .select('receivedLikes');

    res.status(200).json({receivedLikes: likes.receivedLikes});
  } catch (error) {
    console.error('Error fetching received likes:', error);
    res.status(500).json({message: 'Internal server error'});
  }
});

//endpoint to create a match betweeen two people
app.post('/create-match', async (req, res) => {
  try {
    const {currentUserId, selectedUserId} = req.body;

    //update the selected user's crushes array and the matches array
    await User.findByIdAndUpdate(selectedUserId, {
      $push: {matches: currentUserId},
      $pull: {likedProfiles: currentUserId},
    });

    //update the current user's matches array recievedlikes array
    await User.findByIdAndUpdate(currentUserId, {
      $push: {matches: selectedUserId},
    });

    // Find the user document by ID and update the receivedLikes array
    const updatedUser = await User.findByIdAndUpdate(
      currentUserId,
      {
        $pull: {receivedLikes: {userId: selectedUserId}},
      },
      {new: true},
    );

    if (!updatedUser) {
      return res.status(404).json({message: 'User not found'});
    }

    // If the user document was successfully updated
    res.status(200).json({message: 'ReceivedLikes updated successfully'});
  } catch (error) {
    res.status(500).json({message: 'Error creating a match', error});
  }
});

// Endpoint to get all matches of a specific user
app.get('/get-matches/:userId', async (req, res) => {
  try {
    const {userId} = req.params;

    // Find the user by ID and populate the matches field
    const user = await User.findById(userId).populate(
      'matches',
      'firstName imageUrls',
    );

    if (!user) {
      return res.status(404).json({message: 'User not found'});
    }

    // Extract matches from the user object
    const matches = user.matches;

    res.status(200).json({matches});
  } catch (error) {
    console.error('Error getting matches:', error);
    res.status(500).json({message: 'Internal server error'});
  }
});

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
