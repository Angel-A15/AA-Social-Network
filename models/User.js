const { Schema, model, Types } = require('mongoose');


const UserSchema = new Schema(
   { 
    username: {
        type: String,
        Unique: true,
        Required: true,
        Trimmed: true
    },
    email: {
        type: String,
        Required: true,
        Unique: true,
        //needs match of valid email address property
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
})

const User = model('User', UserSchema);

module.exports = User;