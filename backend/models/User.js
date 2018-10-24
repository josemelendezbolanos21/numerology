const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required,
  },
  name: {
    type: String,
    required,
  },
  password: {
    type: String,
    required,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

module.exports = User = mongoose.model('users', userSchema);