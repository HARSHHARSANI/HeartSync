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

    console.log(userData, 'userData');

    // Transform the date fields to a Date object
    const dateOfBirth = new Date(
      userData.year,
      userData.month - 1,
      userData.day,
    );

    console.log(dateOfBirth, 'dateOfBirth');

    // Transform the incoming data to fit the schema
    const newUser = new userModel({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      dateOfBirth,
      gender: userData.gender,
      location: userData.location,
      type: userData.type,
      datingType: userData.datingType,
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

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
