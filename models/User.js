const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

const UserSchema = new Schema(
   { 
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
            "Please fill a valid email address"
        ],
        
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
    ],
   },
   {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
   }
);

//Virtual called friendCount that retrieves the length of the user's friends array field on query.
UserSchema.virtual('friendCount').get(function() {
    if (this.friends.length) {
        return this.friends.length
    } else {return '0'
    }
    
});

const User = model('User', UserSchema);

module.exports = User;