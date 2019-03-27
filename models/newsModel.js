const mongoose = require("mongoose")
let Schema = mongoose.Schema

let ArticleSchema = new Schema({

    "headline": {
        type: String,
        trim: true,
        unique: true
    },
    "summary": {
        type: String,
        trim: true,
        unique: true
    },
    "story URL": {
        type: String,
        trim: true,
        unique: true,
        match: [/http/gi || /https/gi, "Please enter valid url"]
    },
    notes: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
})

let Article = mongoose.model("Article", ArticleSchema)

module.exports = Article;