const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  result: {
    type: String,
  },
});

module.exports = mongoose.model('TransactionRegister', userSchema);
