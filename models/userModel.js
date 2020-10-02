const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true, minlength: 8 },
  displayName: { type: String, required: true },
  active: { type: Boolean, required: true, default: false },
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
