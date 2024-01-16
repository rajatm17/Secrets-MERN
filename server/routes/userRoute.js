const express = require('express');
const { userModel } = require('../models/userModel');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');

// Middleware to authenticate user using JWT token
const authenticateUser = (req, res, next) => {
  const BearerToken = req.headers['authorization'];
  if (!BearerToken) return res.status(401).send('Access denied');
  const token = BearerToken.split(' ')[1];
  jwt.verify(token, 'secret', (err, data) => {
    if (err) return res.status(401).send('Access denied');
    req.user = data;
    req.token = token;
    next();
  });
};

// Route for user signup
userRouter.post('/signup', async (req, res) => {
  // Create a new user with the provided username and password
  const user = new userModel({
    username: req.body.username,
    password: req.body.password,
  });

  // Check if the username is already taken
  const existingUser = await userModel.findOne({ username: req.body.username });
  if (existingUser) {
    res.status(200).json({ message: 'Username already taken' });
  } else {
    // Save the new user to the database
    await user.save();
    res.status(201).json({ message: 'Account created successfully' });
  }
});

// Route for user login
userRouter.post('/login', async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  // Find the user in the database based on username and password
  const getUser = await userModel.findOne({
    username: username,
    password: password,
  });

  // If user is not found, send a response
  if (!getUser) res.status(200).json({ message: 'Username not found' });
  else {
    // If user is found, generate a JWT token and send it along with user data
    res
      .status(201)
      .send({ token: jwt.sign({ getUser }, 'secret'), user: getUser });
  }
});

// Route for password recovery
userRouter.post('/recovery', async (req, res, next) => {
  const username = req.body.username;

  // Check if the user with the given username exists
  const userExists = await userModel.findOne({ username: username });

  // If user exists, send username and password for recovery
  if (userExists) {
    res.status(201).json({ username: username, password: userExists.password });
  } else {
    // If user does not exist, send a response
    res.status(200).json({ message: 'User does not exist' });
  }
});

module.exports = { userRouter };
