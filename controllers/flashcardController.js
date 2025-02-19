const Flashcard = require("../models/flashcardModel");
const User = require("../models/userModel");

const calculateNextReview = (box) => {
    const intervals = [1, 2, 5, 10]; // Example intervals in days
    const nextReviewDate = new Date();
    nextReviewDate.setDate(
        nextReviewDate.getDate() + (intervals[box - 1] || 10)
    );
    return nextReviewDate;
};

exports.addFlashcard = async (req, res) => {
    try {
        const flashcard = new Flashcard({ ...req.body, user: req.user.id });
        await flashcard.save();
        res.status(201).json({ message: "Flashcard added" });
    } catch (error) {
        res.status(400).json({ error: "Failed to add flashcard" });
    }
};

exports.getAllFlashcards = async (req, res) => {
    try {
        const now = new Date();
        const flashcards = await Flashcard.find({
            user: req.user.id,
            nextReview: { $lte: now },
        });
        res.status(200).json(flashcards);
    } catch (error) {
        res.status(400).json({ error: "Failed to get flashcards" });
    }
};

exports.updateFlashcard = async (req, res) => {
    try {
        const flashcard = await Flashcard.findOne({
            _id: req.params.id,
            user: req.user.id,
        });
        if (!flashcard) {
            return res.status(404).json({ error: "Flashcard not found" });
        }

        if (req.body.correct) {
            flashcard.box += 1;
            flashcard.nextReview = calculateNextReview(flashcard.box);
        } else {
            flashcard.box = 1;
            flashcard.nextReview = Date.now();
        }

        await flashcard.save();

        // Update user's current flashcard
        const user = await User.findById(req.user.id);
        user.currentFlashcard = flashcard._id;
        await user.save();

        res.status(200).json(flashcard);
    } catch (error) {
        res.status(400).json({ error: "Failed to update flashcard" });
    }
};

exports.deleteFlashcard = async (req, res) => {
    try {
        const flashcard = await Flashcard.findOne({
            _id: req.params.id,
            user: req.user.id,
        });
        if (!flashcard) {
            return res.status(404).json({ error: "Flashcard not found" });
        }

        await Flashcard.deleteOne({ _id: req.params.id, user: req.user.id });
        res.status(200).json({ message: "Flashcard deleted" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Failed to delete flashcard" });
    }
};
