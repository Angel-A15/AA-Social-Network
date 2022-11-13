const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const Reaction = require('./Reaction');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            //Use a getter method to format the timestamp on query:done
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        // (The user that created this thought)
        username: {
            type: String,
            required: true
        },
        // (These are like replies)
        reactions: 
            [Reaction]
            

        
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// Create a virtual called reactionCount that retrieves 
// the length of the thought's reactions array field on query.:done
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;  
});


const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;