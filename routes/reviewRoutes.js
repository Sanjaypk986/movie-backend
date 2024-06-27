const express = require("express");
const { getAllReview, addReview } = require("../controllers/reviewController");
const protect = require("../middlewares/protect");
const router = express.Router();

// get all review
router.get("/", getAllReview);
// add review
router.post("/",protect, addReview);

module.exports = router;
