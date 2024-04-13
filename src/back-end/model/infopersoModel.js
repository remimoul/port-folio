const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let infopersoSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  github: {
    type: String,
    required: false,
  },
  linkedin: {
    type: String,
    required: false,
  },
},{ timestamps: true });

module.exports = mongoose.model('Infoperso', infopersoSchema);
