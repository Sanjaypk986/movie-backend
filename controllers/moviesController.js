const Movie = require("../models/movieModels");

// get all movies
const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find(req.query);
    res.json(movies);
  } catch (error) {
    console.error("Error fetching movies:", error);
    res.status(500).send("Internal Server Error");
  }
};

// get movie by id
const getMovieById = async (req, res) => {
  const movie = await Movie.findById(req.params.movieId);
  res.json(movie);
};

// add movie
const addMovie = async (req, res) => {
  // create document using req.body
  const movie = new Movie(req.body);
  // save document
  await movie.save();
  res.json(movie);
};

//   update movie
const updateMovie = async (req, res) => {
  const updatedMovie = await Movie.findByIdAndUpdate(
    req.params.movieId,
    req.body,
    { new: true }
  );
  res.send(updatedMovie);
};

//   delete movie
const deleteMovie = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const deletedMovie = await Movie.findByIdAndDelete(movieId);

    res.status(200).send({ message: 'Movie deleted successfully', movie: deletedMovie });
  } catch (error) {
    res.status(500).send({ message: 'Error deleting movie', error: error.message });
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
};
