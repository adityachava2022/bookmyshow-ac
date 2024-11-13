const {
  addShow,
  deleteShow,
  updateShow,
  getAllShowsByTheatre,
  getAllTheatersByMovie,
  getShowsById,
} = require("../controllers/showController");

const router = require("express").Router();

/**
 * @swagger
 * tags:
 *   name: Show
 *   description: API endpoints related to shows
 */

/**
 * @swagger
 * /addShow:
 *   post:
 *     summary: Adds a new show
 *     tags: [Show]
 *     description: Adds a new show to a theater's schedule.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               theaterId:
 *                 type: string
 *               movieId:
 *                 type: string
 *               showTime:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Show added successfully
 *       400:
 *         description: Invalid input
 */
router.post("/addShow", addShow);

/**
 * @swagger
 * /deleteShow/{showId}:
 *   delete:
 *     summary: Deletes a show by ID
 *     tags: [Show]
 *     description: Removes a show from a theater's schedule using its ID.
 *     parameters:
 *       - in: path
 *         name: showId
 *         required: true
 *         description: The ID of the show to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Show deleted successfully
 *       404:
 *         description: Show not found
 */
router.delete("/deleteShow/:showId", deleteShow);

/**
 * @swagger
 * /updateShow:
 *   patch:
 *     summary: Updates an existing show
 *     tags: [Show]
 *     description: Updates details of an existing show in the schedule.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               showId:
 *                 type: string
 *                 description: The ID of the show to update.
 *               showTime:
 *                 type: string
 *                 format: date-time
 *               otherDetails:
 *                 type: string
 *                 description: Any additional details for the show.
 *     responses:
 *       200:
 *         description: Show updated successfully
 *       400:
 *         description: Invalid input
 */
router.patch("/updateShow", updateShow);

/**
 * @swagger
 * /getAllShowsByTheatre:
 *   post:
 *     summary: Retrieves all shows for a theater
 *     tags: [Show]
 *     description: Fetches a list of all shows available in a specific theater.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               theaterId:
 *                 type: string
 *                 description: The ID of the theater.
 *     responses:
 *       200:
 *         description: List of shows retrieved successfully
 *       404:
 *         description: Theater not found
 */
router.post("/getAllShowsByTheatre", getAllShowsByTheatre);

/**
 * @swagger
 * /getAllTheatersByMovie:
 *   post:
 *     summary: Retrieves all theaters showing a specific movie
 *     tags: [Show]
 *     description: Fetches a list of all theaters showing a particular movie.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               movieId:
 *                 type: string
 *                 description: The ID of the movie.
 *     responses:
 *       200:
 *         description: List of theaters retrieved successfully
 *       404:
 *         description: Movie not found
 */
router.post("/getAllTheatersByMovie", getAllTheatersByMovie);

/**
 * @swagger
 * /getShowById:
 *   post:
 *     summary: Retrieves a show by ID
 *     tags: [Show]
 *     description: Fetches details of a specific show by its ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               showId:
 *                 type: string
 *                 description: The ID of the show to retrieve.
 *     responses:
 *       200:
 *         description: Show details retrieved successfully
 *       404:
 *         description: Show not found
 */
router.post("/getShowById", getShowsById);

module.exports = router;
