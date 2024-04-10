const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let exProSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  annee: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('exPro', exProSchema);
