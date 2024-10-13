const MovieModel = require("../models/movieSchema");

const addMovie = async (req, res) => {
  try {
    // check if movie already exists
    const movieExists = MovieModel.exists({ movieName: req?.body?.movieName });
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
    return res.send({
      success: false,
      message: error.message,
    });
  }
};

const getAllMovies = async (req, res) => {
  try {
    const allMovies = await MovieModel.find();
    res.send({
      success: true,
      message: "All movies has been fetched",
      data: allMovies,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const updateMovie = async (req, res) => {
  try {
    const movie = await MovieModel.findByIdAndUpdate(req?.body?.id, req?.body, {
      new: true,
    });
    res.send({
      success: true,
      message: "The Movie has been Updated",
      data: movie,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const movieId = req?.params?.id;
    await MovieModel.findByIdAndDelete(movieId);
    res.send({
      success: true,
      message: "The Movie has been deleted",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
};
