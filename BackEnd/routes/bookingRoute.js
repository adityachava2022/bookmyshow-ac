const router = require("express").Router();
const {
  makePayment,
  bookShow,
  getAllBookings,
  makePaymentAndBookShow,
} = require("../controllers/bookingController");

/**
 * @swagger
 * tags:
 *   name: Booking
 *   description: API endpoints related to booking
 */

/**
 * @swagger
 * /makePayment:
 *   post:
 *     summary: Initiates a payment process
 *     tags: [Booking]
 *     description: Use this route to start a payment transaction for booking.
 *     responses:
 *       200:
 *         description: Payment was successful
 *       400:
 *         description: Payment failed
 */
router.post("/makePayment", makePayment);

/**
 * @swagger
 * /bookShow:
 *   post:
 *     summary: Books a show
 *     tags: [Booking]
 *     description: Use this route to reserve seats for a specified show.
 *     responses:
 *       200:
 *         description: Booking was successful
 *       400:
 *         description: Booking failed
 */
router.post("/bookShow", bookShow);

/**
 * @swagger
 * /getAllBookings:
 *   get:
 *     summary: Retrieves all bookings
 *     tags: [Booking]
 *     description: Fetch a list of all bookings made by the user.
 *     responses:
 *       200:
 *         description: A list of bookings
 *       500:
 *         description: Server error
 */
router.get("/getAllBookings", getAllBookings);

/**
 * @swagger
 * /makePaymentAndBookShow:
 *   post:
 *     summary: Makes a payment and books a show simultaneously
 *     tags: [Booking]
 *     description: Use this route to complete a payment and reserve seats in one step.
 *     responses:
 *       200:
 *         description: Payment and booking were successful
 *       400:
 *         description: Payment or booking failed
 */
router.post("/makePaymentAndBookShow", makePaymentAndBookShow);

module.exports = router;
