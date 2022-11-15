const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/user-controller');


// GET all users
router.route('/')
    .get(getAllUsers)
    .post(createUser);

//Set up Get, PUT, and DELETE by id User
router.route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// DELETE to remove a friend from a user's friend list
router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);


//module export
module.exports = router;