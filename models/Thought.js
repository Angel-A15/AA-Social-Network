const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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
        reactions: {
            // TODO:Array of nested documents created with the reactionSchema:uncertain
        }
    }
);

const ReactionSchema = new Schema(
    {
        reactionId:{
            //TO DO: Use Mongoose's ObjectId data type:done
            //TO DO: Default value is set to a new ObjectId:done
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            // Use a getter method to format the timestamp on query:done
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
            
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;  
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;