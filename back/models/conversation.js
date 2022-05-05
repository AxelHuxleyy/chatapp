const mongoose = require("mongoose")

const ConversationSChema = new mongoose.Schema(
    {
        members: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "user",
            require: true,
            trim: true,
        }
    },
    { timestamps: true }
)

ConversationSChema.index({ name: "text" })

module.exports = mongoose.model("Conversation", ConversationSChema)