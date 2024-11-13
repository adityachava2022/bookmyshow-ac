const {
  addMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
  getMovieById,
} = require("../controllers/movieController");

const router = require("express").Router();

/**
 * @swagger
 * tags:
 *   name: Movie
 *   description: API endpoints related to movies
 */

/**
 * @swagger
 * /movie/{id}:
 *   get:
 *     summary: Retrieves a movie by its ID
 *     tags: [Movie]
 *     description: Fetches details of a movie based on the provided movie ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the movie to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie details retrieved successfully
 *       404:
 *         description: Movie not found
 */
router.get("/movie/:id", getMovieById);

/**
 * @swagger
 * /addMovie:
 *   post:
 *     summary: Adds a new movie
 *     tags: [Movie]
 *     description: Adds a new movie to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               genre:
 *                 type: string
 *               releaseDate:
 *                 type: string
 *                 format: date
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Movie added successfully
 *       400:
 *         description: Invalid input
 */
router.post("/addMovie", addMovie);

/**
 * @swagger
 * /getAllMovies:
 *   get:
 *     summary: Retrieves all movies
 *     tags: [Movie]
 *     description: Fetches a list of all movies in the database.
 *     responses:
 *       200:
 *         description: List of movies retrieved successfully
 *       500:
 *         description: Server error
 */
router.get("/getAllMovies", getAllMovies);

/**
 * @swagger
 * /updateMovie:
 *   patch:
 *     summary: Updates an existing movie
 *     tags: [Movie]
 *     description: Updates details of an existing movie in the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: The ID of the movie to update.
 *               title:
 *                 type: string
 *               genre:
 *                 type: string
 *               releaseDate:
 *                 type: string
 *                 format: date
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Movie updated successfully
 *       400:
 *         description: Invalid input
 */
router.patch("/updateMovie", updateMovie);

/**
 * @swagger
 * /deleteMovie/{movieId}:
 *   delete:
 *     summary: Deletes a movie by ID
 *     tags: [Movie]
 *     description: Removes a movie from the database using its ID.
 *     parameters:
 *       - in: path
 *         name: movieId
 *         required: true
 *         description: The ID of the movie to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie deleted successfully
 *       404:
 *         description: Movie not found
 */
router.delete("/deleteMovie/:movieId", deleteMovie);

module.exports = router;
