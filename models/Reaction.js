const ReactionSchema = new Schema(
    {
        reactionId:{

        },
        reactionBody: {
            Type: String,
            Required: true,
            maxLength: 280
        },
        username: {
            Type: String,
            Required: True
        },
        createdAt: {
            Type: Date,
            default: Date.now,
            // Use a getter method to format the timestamp on query
        }
    }
);

// This will not be a model, but rather will be used as the 
// reaction field's subdocument schema in the Thought model.