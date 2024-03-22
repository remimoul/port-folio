const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let infopersoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  profilePictureUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Infoperso', infopersoSchema);
