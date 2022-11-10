const { Schema, model, Types } = require('mongoose');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            Required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            Type: Date,
            default: Date.now,
            //Use a getter method to format the timestamp on query
        },
        // (The user that created this thought)
        username: {
            Type: String,
            Required: true
        },
        // (These are like replies)
        reactions: {
            // Array of nested documents created with the reactionSchema
        }
    }
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;  
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;