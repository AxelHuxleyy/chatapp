const mongoose = require("mongoose")

const MessageSChema = new mongoose.Schema(
    {
        message: {
            type: String,
            require: true,
        },
        sender: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
          require: true
        },
        conversation:{
          type: mongoose.Schema.Types.ObjectId,
          ref: "Conversation",
          require: true
        }
    },
    { timestamps: true }
)

MessageSChema.index({ name: "text" })

module.exports = mongoose.model("Message", MessageSChema)