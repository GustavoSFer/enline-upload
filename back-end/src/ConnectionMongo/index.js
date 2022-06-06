const mongoose = require('mongoose');
require('dotenv').config();


const dbURI = process.env.DB_URI || 'mongodb://localhost:27017/enline-db';
mongoose.connect(dbURI);


const schema = new mongoose.Schema({
  file: String,
  name: String,
  date: Date,
})

const model = mongoose.model('Enline', schema);

module.exports = model;