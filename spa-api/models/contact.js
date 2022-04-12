const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    minlength: 1,
    maxlength: 20,
  },
  phone: {
    type: String,
    unique: true,
    required: true,
    minlength: 1,
    maxlength: 20,
  },
}, { versionKey: false });

module.exports = mongoose.model('contact', contactSchema);