const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = Schema({
  username: String,
  email: String,
  password: String,
  imgPath: { type: String, default: '' }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
