const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/enline-db');

const schema = new mongoose.Schema({
  file: String,
  date: Date,
})

const model = mongoose.model('Enline', schema);

module.exports = model;