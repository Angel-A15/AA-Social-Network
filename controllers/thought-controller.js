const { Thought, User } = require('../models');

const thoughtController = {
    createThought({ params, body}, res) {
        console.log(body);
        Thought.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user was found with this id'});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },
    addReaction({ params, body }, res){
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { reactions: body } },
            { new: true, runValidators: true }
        )
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user was found with this id'});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },
    removeReaction({ params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.commentId },
            { $pull: { reactions: { reactionId: params.reactionId }}},
            { new: true }
        )
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },


}

// getThoughtById,
// getAllThoughts,
// createThought,
// updateThought,
// removeThought
// addReaction,
// removeReaction