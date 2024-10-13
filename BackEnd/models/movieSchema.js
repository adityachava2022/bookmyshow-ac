const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    movieName: {
        type: String,
        required: true,
        unique: true,
      },
      description: {
        type: String,
        requried: true,
      },
      duration: {
        type: Number,
        requried: true,
      },
      genre: {
        type: String,
        required: true,
      },
      language: {
        // todo : convert into array to handle movies with multiple languages
        type: String,
        required: true,
      },
      releaseDate: {
        type: Date,
        required: true,
      },
      poster: {
        type: String,
        required: true,
      },
});

module.exports = mongoose.model("movies", movieSchema);