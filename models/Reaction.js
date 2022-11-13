const { Schema, Types } = require("mongoose");
const dateFormat = require('../utils/dateFormat');

const Reaction = new Schema(
    {
        reactionId:{
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
            // Using a getter method to format the timestamp on query
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
            
        }
    }
);

module.exports = Reaction;