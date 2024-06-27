const express = require("express");
const { getAllReview, addReview } = require("../controllers/reviewController");
const router = express.Router();

// get all review
router.get("/", getAllReview);
// add review
router.post("/", addReview);

module.exports = router;
