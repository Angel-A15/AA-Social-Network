const { SchemaTypes } = require("mongoose");

const ReactionSchema = new Schema(
    {
        reactionId:{
            //TO DO: Use Mongoose's ObjectId data type
            type: SchemaTypes.ObjectId,
            //TO DO: Default value is set to a new ObjectId
            default: newObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: True
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
            // Use a getter method to format the timestamp on query:done
        }
    }
);

// Schema Settings
// This will not be a model, but rather will be used as the 
// reaction field's subdocument schema in the Thought model.