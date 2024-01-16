const express = require('express');
const secretsRouter = express.Router();
const jwt = require('jsonwebtoken');
const secretModel = require('../models/secretModel');
const { userModel } = require('../models/userModel');

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

// Route to get all secrets
secretsRouter.get('/', async (req, res, next) => {
  // Retrieve all secrets from the database
  const secrets = await secretModel.find({});
  res.send(secrets);
});

// Route to get a specific secret by ID, with authentication
secretsRouter.get('/:secretId', authenticateUser, async (req, res, next) => {
  // Extract secret ID from the request parameters
  const secretId = req.params.secretId;

  // Find the secret in the database by ID
  const secret = await secretModel.findOne({ _id: secretId });

  // If no secret is found, send a response
  if (!secret) res.send('No secret found');

  // Send the found secret as a response
  res.send(secret);
});

// Route to compose and submit a new secret, with authentication
secretsRouter.post('/compose', authenticateUser, async (req, res, next) => {
  // Extract user ID, title, and description from the request body
  const userId = req.body.userId;
  const title = req.body.title;
  const description = req.body.description;

  // Check if the user has already submitted a secret
  const existingSecret = await secretModel.findOne({ userId: userId });

  // If user has already submitted a secret, send a response
  if (existingSecret) {
    res
      .status(200)
      .json({ message: 'User already submitted a secret', userId });
  } else {
    // If title or description is missing, send a response
    if (!title || !description) {
      res.send('No title or description');
    }

    // Create a new secret and save it to the database
    const secret = new secretModel({
      userId: userId,
      title: title,
      description: description,
    });
    await secret.save();

    // Send a success response
    res.status(201).json({ message: 'Secret submitted successfully', userId });
  }
});

module.exports = { secretsRouter };
