// backend/models/Data.js
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  formData: {
    type: [Object], // Array of objects to store form data
    required: true,
  },
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
