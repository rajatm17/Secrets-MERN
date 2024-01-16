const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
const { userRouter } = require('./routes/userRoute');
const { secretsRouter } = require('./routes/secretRoute');
const secretModel = require('./models/secretModel');
const app = express();

// Connect to MongoDB database
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Connected to MongoDB');
});

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route for the root endpoint, fetching and sending all secrets
// app.get('/', async (req, res, next) => {
// Retrieve all secrets from the database
//   await secretModel.find({}, (secrets, err) => {
//     if (err) res.send(err);
//     res.send(secrets);
//   });
// });

// Route for authentication-related endpoints
app.use('/auth', userRouter);

// Route for secret-related endpoints
app.use('/secret', secretsRouter);

// Start the server on port 3001
app.listen(3001, () => {
  console.log('Listening on port 3001');
});
