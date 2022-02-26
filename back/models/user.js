const mongoose = require("mongoose")

const UserSChema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            trim: true,
        },
        lastName: {
            type: String,
            trim: true,
        },
        password: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true,
            trim: true
        }
    },
    { timestamps: true }
)

UserSChema.index({ name: "text" })

module.exports = mongoose.model("user", UserSChema)