const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cat = new Schema({
  url: String,
  id: String,
  vote: Number,
})

const Cats = mongoose.model('Cats', cat)

module.exports = Cats
