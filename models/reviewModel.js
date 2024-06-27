const mongoose = require('mongoose');

// create schema
const reviewSchema = new mongoose.Schema({
    title: String,
    description: String,
    user:{
       type: mongoose.ObjectId,
        ref: 'User'
    },
    movie:{
      type: mongoose.ObjectId,
       ref: 'Movie'
   }
  });

//   create model using schema
  const Review = mongoose.model('Review', reviewSchema);

  module.exports = Review