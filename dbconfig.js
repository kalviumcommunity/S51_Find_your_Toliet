const mongoose = require('mongoose');


const UserSchema = new  mongoose.Schema({
  ID:String,
  Name:String,
  type:String,
  city:String,
  Location:String,
  Rating:String
});


const usermodel = mongoose.model("toiletenteris",UserSchema)

module.exports = usermodel