const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  num1: {
    type: Number,
  },
  num2: {
    type: Number,
  },
  operator: {
    type: String,
  },
});

module.exports = mongoose.model('TransactionRegister', userSchema);
