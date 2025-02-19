// backend/routes/authRoutes.js
const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: The username of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *         currentFlashcard:
 *           type: string
 *           description: The id of the current flashcard
 *       example:
 *         username: exampleUser
 *         password: examplePass
 */

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: The authentication API
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: The user was successfully registered
 *       400:
 *         description: Bad Request
 */
router.post("/register", registerUser);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Successful login
 *       400:
 *         description: Bad Request
 */
router.post("/login", loginUser);

module.exports = router;
