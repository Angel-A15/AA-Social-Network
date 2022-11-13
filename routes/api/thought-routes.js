const router = require('express').Router();

const {
    getThoughtById,
    getAllThoughts,
    createThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thought-controller');


// GET all thoughts
router.route('/')
    .get(getAllThoughts)
    .post(createThought);

// GET a single thought by its _id and populated thought and friend data
router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);

// POST a new thought:
router.route('/:thoughtId')
    .post(createThought);


//Set up Get, PUT, and DELETE by id thought
router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);

// /api/thoughts/:thoughtId/reactions
// POST to create a reaction stored in a single thought's reactions array field
// DELETE to pull and remove a reaction by the reaction's reactionId value
router.route('/thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction);

module.exports = router;