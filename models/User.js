const { Schema, model, Types } = require('mongoose');


const UserSchema = new Schema(
   { 
    username: {
        type: String,
        unique: true,
        required: true,
        trimmed: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/,
            "Please fill a valid email address",
        ],
        //needs match of valid email address property:done
    },
    //Array of _id values referencing the Thought model
    thoughts: 
        [ThoughtSchema],
    //Array of _id values referencing the User model
    freinds: 
        [UserSchema]
   }
);

//Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;