const {
  addTheatre,
  updateTheatre,
  deleteTheatre,
  getAllTheatres,
  getAllTheatresByOwner,
} = require("../controllers/theatreController");
const router = require("express").Router();

/**
 * @swagger
 * tags:
 *   name: Theatre
 *   description: API endpoints for theatre management
 */

/**
 * @swagger
 * /addTheatre:
 *   post:
 *     summary: Adds a new theatre
 *     tags: [Theatre]
 *     security:
 *       - BearerAuth: []
 *     description: Use this route to add a new theatre to the system.
 *     responses:
 *       201:
 *         description: Theatre added successfully
 *       400:
 *         description: Invalid theatre data
 */
router.post("/addTheatre", addTheatre);
/**
 * @swagger
 * /updateTheatre:
 *   patch:
 *     summary: Updates an existing theatre
 *     tags: [Theatre]
 *     security:
 *       - BearerAuth: []
 *     description: Use this route to update the details of an existing theatre.
 *     responses:
 *       200:
 *         description: Theatre updated successfully
 *       400:
 *         description: Invalid theatre data or invalid ID
 *       404:
 *         description: Theatre not found
 */
router.patch("/updateTheatre", updateTheatre);
/**
 * @swagger
 * /deleteTheatre/{theatreId}:
 *   delete:
 *     summary: Deletes a theatre by ID
 *     tags: [Theatre]
 *     security:
 *       - BearerAuth: []
 *     description: Use this route to delete a theatre from the system by its ID.
 *     parameters:
 *       - in: path
 *         name: theatreId
 *         required: true
 *         description: ID of the theatre to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Theatre deleted successfully
 *       404:
 *         description: Theatre not found
 */
router.delete("/deleteTheatre/:theatreId", deleteTheatre);
/**
 * @swagger
 * /getAllTheatres:
 *   get:
 *     summary: Retrieves all theatres
 *     tags: [Theatre]
 *     security:
 *       - BearerAuth: []
 *     description: Use this route to get a list of all theatres.
 *     responses:
 *       200:
 *         description: List of all theatres
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   theatreId:
 *                     type: string
 *                   name:
 *                     type: string
 *                   location:
 *                     type: string
 *                   owner:
 *                     type: string
 *       404:
 *         description: No theatres found
 */
router.get("/getAllTheatres", getAllTheatres);
/**
 * @swagger
 * /getAllTheatresByOwner:
 *   get:
 *     summary: Retrieves theatres by owner
 *     tags: [Theatre]
 *     security:
 *       - BearerAuth: []
 *     description: Use this route to get a list of all theatres for a particular owner.
 *     parameters:
 *       - in: query
 *         name: ownerId
 *         required: true
 *         description: ID of the owner whose theatres to fetch
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of theatres owned by the specified owner
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   theatreId:
 *                     type: string
 *                   name:
 *                     type: string
 *                   location:
 *                     type: string
 *                   owner:
 *                     type: string
 *       400:
 *         description: Invalid owner ID
 *       404:
 *         description: No theatres found for the given owner
 */
router.get("/getAllTheatresByOwner", getAllTheatresByOwner);

module.exports = router;
