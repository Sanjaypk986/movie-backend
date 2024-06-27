const Review = require("../models/reviewModel");

// get all review
const getAllReview = async (req, res) => {
  const reviews = await Review.find({});
  res.json(reviews);
};
// add Review
const addReview = async (req, res) => {
    // create document using req.body
    const review = new Review(req.body);
    // save document
    await review.save();
    res.send(review);
  };

  module.exports = {addReview,getAllReview}