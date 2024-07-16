const Review = require("../models/reviewModel");

// get all review
const getAllReview = async (req, res) => {
  try {
    const reviews = await Review.find(req.query).populate('user');
    res.json(reviews);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};
// add Review
const addReview = async (req, res) => {
  // create document using req.body
  try {
    const review = new Review({
      ...req.body,
      user: req.user._id,
    });
    // save document
    await review.save();
    res.send(review);
  } catch (error) {
    res.status(400).send("Please check data");
  }
};

module.exports = { addReview, getAllReview };
