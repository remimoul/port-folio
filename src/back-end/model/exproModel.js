const { logDOM } = require('@testing-library/react');
const mongoose = require('mongoose');
const { format } = require('prettier');
const Schema = mongoose.Schema;

let exProSchema = new Schema({
  // formation: {
  //   type: String,
  //   required: true,
  // },
  // anneeformation: {
  //   type: String,
  //   required: true,
  // },
  // descriptionformation: {
  //   type: String,
  //   required: true,
  // },
  // logoUrlformation: {
  //   type: String,
  // },
  // diplome: {
  //   type: String,
  //   required: true,
  // },
  entreprise: {
    type: String,
    required: true,
  },
  annee: {
    type: String,
    required: true,
  },
  poste: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  logoUrl: {
    type: String,
  },
},{ timestamps: true });

module.exports = mongoose.model('exPro', exProSchema);
