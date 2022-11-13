const router = require('express').Router();

const {
    getThoughtById,
    getAllThoughts,
    createThought,
    updateThought,
    removeThought,
    getReactionById,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');


// GET all thoughts
router.route('/:thoughtId').get(getAllThoughts);

// GET a single thought by its _id and populated thought and friend data
router.route('/:thoughtId').get(getThoughtById)

// POST a new thought:
router.route('/:thoughtId').post(createThought);


//Set up Get, PUT, and DELETE by id thought
router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);

// /api/thoughts/:thoughtId/reactions
// POST to create a reaction stored in a single thought's reactions array field
router.route('/:thoughtId/reactions').post(addReaction);

// DELETE to pull and remove a reaction by the reaction's reactionId value
router.route('/:reactionId')
    .get(getReactionById)
    .put(updateReaction)
    .delete(removeReaction);

// /api/thoughts/:thoughtId/reactions
// POST to create a reaction stored in a single thought's reactions array field
// DELETE to pull and remove a reaction by the reaction's reactionId value

module.exports = router;