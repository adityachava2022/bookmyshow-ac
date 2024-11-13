const router = require("express").Router();
const {
  registerUser,
  loginUser,
  currentUser,
  forgetPassword,
  resetPassword,
} = require("../controllers/UserController");

/**
 * @swagger
 * tags:
 *   name: User
 *   description: API endpoints for user management (registration, login, etc.)
 */

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     tags: [User]
 *     description: Use this route to register a new user with necessary details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the user.
 *               email:
 *                 type: string
 *                 description: The email address of the user.
 *               password:
 *                 type: string
 *                 description: The password for the user.
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Invalid input data
 */
router.post("/register", registerUser);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login an existing user
 *     tags: [User]
 *     description: Use this route for user authentication to get a JWT token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email address of the user.
 *               password:
 *                 type: string
 *                 description: The password for the user.
 *     responses:
 *       200:
 *         description: User logged in successfully with JWT token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: The JWT token
 *       401:
 *         description: Invalid credentials
 */
router.post("/login", loginUser);

/**
 * @swagger
 * /getCurrentUser:
 *   get:
 *     summary: Get current authenticated user's details
 *     tags: [User]
 *     description: Use this route to fetch the details of the currently authenticated user.
 *     responses:
 *       200:
 *         description: Successfully retrieved current user details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: string
 *                 username:
 *                   type: string
 *                 email:
 *                   type: string
 *       401:
 *         description: Unauthorized (JWT token is missing or invalid)
 */
router.get("/getCurrentUser", currentUser); // No JWT here

/**
 * @swagger
 * /forgetPassword:
 *   post:
 *     summary: Initiate password reset process
 *     tags: [User]
 *     description: Use this route to request a password reset email by providing the registered email.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email address of the user.
 *     responses:
 *       200:
 *         description: Password reset email sent successfully
 *       404:
 *         description: User with the provided email not found
 */
router.post("/forgetPassword", forgetPassword);

/**
 * @swagger
 * /resetPassword:
 *   post:
 *     summary: Reset the user's password
 *     tags: [User]
 *     description: Use this route to reset the user's password after receiving the reset token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *                 description: The token sent to the user's email for password reset.
 *               newPassword:
 *                 type: string
 *                 description: The new password for the user.
 *     responses:
 *       200:
 *         description: Password reset successfully
 *       400:
 *         description: Invalid or expired token
 */
router.post("/resetPassword", resetPassword);

module.exports = router;
