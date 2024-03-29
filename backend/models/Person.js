const mongoose = require('mongoose')
let uniqueValidator = require("mongoose-unique-validator")

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 5
  },
  phone: {
    type: String,
    minlength: 5
  },
  street: {
    type: String,
    required: true,
    minlength: 5
  },
  city: {
    type: String,
    required: true,
    minlength: 3
  },
})

schema.plugin(uniqueValidator,{message:`Error, expected {PATH} to be unique`})

module.exports = mongoose.model('Person', schema)