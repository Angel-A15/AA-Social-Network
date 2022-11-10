const router = require('exoress').Router();

const {
    getAllUsers,
    getUserById,
    getThoughts,
    getFriendData,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');


// GET all users
router.route('/').get(getAllUsers);

// GET a single user by its _id and populated thought and friend data
router.route('/:userId').get(getThoughts).get(getFriendData);

// POST a new user:
router.route('/:userId').post(createUser);


//Set up Get, PUT, and DELETE by id User
router.route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(removeFriend);
// /api/users/:userId/friends/:friendId
// POST to add a new friend to a user's friend list
// DELETE to remove a friend from a user's friend list


module.exports = router;