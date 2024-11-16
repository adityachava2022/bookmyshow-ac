const MovieModel = require("../models/movieSchema");

const addMovie = async (req, res, next) => {
  try {
    // check if movie already exists
    const movieExists = await MovieModel.exists({
      movieName: req?.body?.movieName,
    });
    if (movieExists) {
      return res.send({
        success: false,
        message: "Movie already exists",
      });
    }

    const newMovie = new MovieModel(req?.body);
    await newMovie.save();
    res.send({
      success: true,
      message: "New Movie has been Added",
    });
  } catch (error) {
    next(error);
  }
};

const getAllMovies = async (req, res, next) => {
  try {
    const allMovies = await MovieModel.find();
    res.send({
      success: true,
      message: "All movies has been fetched",
      data: allMovies,
    });
  } catch (error) {
    next(error);
  }
};

const updateMovie = async (req, res, next) => {
  try {
    const movie = await MovieModel.findByIdAndUpdate(
      req?.body?.movieId,
      req.body,
      { new: true }
    );
    res.send({
      success: true,
      message: "The Movie has been Updated",
      data: movie,
    });
  } catch (error) {
    next(error);
  }
};

const deleteMovie = async (req, res, next) => {
  try {
    const movieId = req.params.movieId;
    await MovieModel.findByIdAndDelete(movieId);
    res.send({
      success: true,
      message: "The Movie has been deleted",
    });
  } catch (error) {
    next(error);
  }
};

const getMovieById = async (req, res, next) => {
  try {
    const movie = await MovieModel.findById(req.params.id);
    res.send({
      success: true,
      message: "Movie fetched successfully!",
      data: movie,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
  getMovieById,
};
