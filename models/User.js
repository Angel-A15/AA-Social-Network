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
            //needs match of valid email address property:done
            /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
            "Please fill a valid email address"
        ],
        
    },
    thoughts: [
        {
            //Array of _id values referencing the Thought model:done
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ]
    ,
    freinds: [
        {
            //Array of _id values referencing the User model:done?
            type: Schema.Types.ObjectId,
            reg: 'User'
        }
    ]
   },
   {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
   }
);

//Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;