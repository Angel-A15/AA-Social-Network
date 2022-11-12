const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
    getThoughts
} = require('../../controllers/user-controller');


// GET all users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// GET a single user by its _id and populated thought and friend data:done?
//Set up Get, PUT, and DELETE by id User:done
router
    .route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// POST a new user:
router
    .route('/:userId')
    .post(createUser);
    
// POST to add a new friend to a user's friend list:done?
// DELETE to remove a friend from a user's friend list:done?
router.route('/:userid/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);


//module export
module.exports = router;