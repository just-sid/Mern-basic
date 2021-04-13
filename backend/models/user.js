const mongoose = require("mongoose");
const Joi = require("joi");


const PostSchema = mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }
  });
  
  module.exports = mongoose.model("Posts", PostSchema);