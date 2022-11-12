// const { SchemaTypes, Types } = require("mongoose");

// const ReactionSchema = new Schema(
//     {
//         reactionId:{
//             //TO DO: Use Mongoose's ObjectId data type:done
//             //TO DO: Default value is set to a new ObjectId:done
//             type: SchemaTypes.ObjectId,
//             default: () => new Types.ObjectId()
//         },
//         reactionBody: {
//             type: String,
//             required: true,
//             maxLength: 280
//         },
//         username: {
//             type: String,
//             required: True
//         },
//         createdAt: {
//             // Use a getter method to format the timestamp on query:done
//             type: Date,
//             default: Date.now,
//             get: createdAtVal => dateFormat(createdAtVal)
            
//         }
//     }
// );

// Schema Settings
// This will not be a model, but rather will be used as the 
// reaction field's subdocument schema in the Thought model.