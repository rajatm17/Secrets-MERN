const mongoose = require('mongoose');

const secretsSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, required: true, ref: 'userModel' },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const secretModel = new mongoose.model('secrets', secretsSchema);

module.exports = secretModel;
