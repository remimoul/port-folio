const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let projetSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
},{ timestamps: true });

module.exports = mongoose.model('Projet', projetSchema);
