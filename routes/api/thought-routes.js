const router = require('express').Router();

const {
    getThoughtById,
    getAllThoughts,
    createThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');


// GET all users
router.route('/:userId').get(getAllThoughts);

// GET a single user by its _id and populated thought and friend data
router.route('/:userId').get(getThoughtById)

// POST a new user:
router.route('/:userId').post(createThought);


//Set up Get, PUT, and DELETE by id User
router.route('/:userid')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);

// /api/thoughts/:thoughtId/reactions
// POST to create a reaction stored in a single thought's reactions array field
// DELETE to pull and remove a reaction by the reaction's reactionId value

module.exports = router;