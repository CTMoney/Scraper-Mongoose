const express = require("express"),
logger = require("morgan"),
mongoose = require("mongoose"),
exphbs = require("express-handlebars"),
PORT = process.env.PORT || 3000,
db = require("./models"),
app = express()

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines"
mongoose.connect(MONGODB_URI)

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")
app.listen(PORT, () => console.log(`Running on localhost:${PORT}`))

app.get("/", (req, res) => {
    res.render("index")
})
