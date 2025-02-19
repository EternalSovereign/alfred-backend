// backend/routes/flashcardRoutes.js
const express = require("express");
const {
    addFlashcard,
    getAllFlashcards,
    updateFlashcard,
    deleteFlashcard,
} = require("../controllers/flashcardController");

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Flashcard:
 *       type: object
 *       required:
 *         - question
 *         - answer
 *       properties:
 *         question:
 *           type: string
 *           description: The question of the flashcard
 *         answer:
 *           type: string
 *           description: The answer of the flashcard
 *         box:
 *           type: number
 *           description: The Leitner box number
 *         nextReview:
 *           type: string
 *           format: date-time
 *           description: The next review date
 *       example:
 *         question: What is the capital of France?
 *         answer: Paris
 *         box: 1
 *         nextReview: 2025-02-18T18:43:00.000Z
 *     UpdateBody:
 *       type: object
 *       required:
 *         - correct
 *       properties:
 *         correct:
 *           type: boolean
 *           description: Indicates if the answer was correct
 */

/**
 * @swagger
 * tags:
 *   name: Flashcards
 *   description: The flashcards managing API
 */

/**
 * @swagger
 * /flashcards:
 *   post:
 *     summary: Add a new flashcard
 *     tags: [Flashcards]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Flashcard'
 *     responses:
 *       201:
 *         description: The flashcard was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Flashcard'
 *       400:
 *         description: Bad Request
 */
router.post("/", addFlashcard);

/**
 * @swagger
 * /flashcards:
 *   get:
 *     summary: Get all flashcards
 *     tags: [Flashcards]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: The list of flashcards
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Flashcard'
 */
router.get("/", getAllFlashcards);

/**
 * @swagger
 * /flashcards/{id}:
 *   put:
 *     summary: Update a flashcard
 *     tags: [Flashcards]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The flashcard id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateBody'
 *     responses:
 *       200:
 *         description: The flashcard was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Flashcard'
 *       400:
 *         description: Bad Request
 */
router.put("/:id", updateFlashcard);

/**
 * @swagger
 * /flashcards/{id}:
 *   delete:
 *     summary: Delete a flashcard
 *     tags: [Flashcards]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The flashcard id
 *     responses:
 *       200:
 *         description: The flashcard was deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: { message: 'Flashcard deleted' }
 *       400:
 *         description: Bad Request
 */
router.delete("/:id", deleteFlashcard);

module.exports = router;
