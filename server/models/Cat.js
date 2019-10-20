const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cat = new Schema({
  url: String,
  id: String,
  score: { type: Number, default: 0 },
})

const Cats = mongoose.model('Cats', cat)

module.exports = Cats
