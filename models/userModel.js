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
        match: {
            args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#!@#$%^&*()~`=+_])[A-Za-z\d!@#$%^&*()~`=+_]{8,128}$/g,
            msg: 'Please enter a password with atleast one of each: lowercase letter, uppercase letter, number, and special character'
        }
    }
})

let User = mongoose.model("User", UserSchema)

module.exports = User

