const mongoose = require('mongoose');
// const { secretModel, secretschema } = require('../models/secretModel');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, requird: true },
});

const userModel = mongoose.model('User', userSchema);

//named exports
module.exports = { userSchema, userModel };
