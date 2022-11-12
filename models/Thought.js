const { Schema, model, Types } = require('mongoose');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
            //Use a getter method to format the timestamp on query:done
        },
        // (The user that created this thought)
        username: {
            type: String,
            required: true
        },
        // (These are like replies)
        reactions: {
            
            // Array of nested documents created with the reactionSchema:uncertain
        }
    }
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;  
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;