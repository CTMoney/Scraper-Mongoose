const mongoose = require("mongoose")

let Schema = mongoose.Schema;

let UserSchema = new Schema({
    "username": {
        type: String,
        required: true,
        unique: true
    },
    "password": {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 24,
        match: [/\W+/gm, "Must contain atleast one special character"],
        match: [/[A-Z]/gm, "Must contain atleast one capitalized character"]
    }
})

let User = mongoose.model("User", UserSchema)

module.exports = User

