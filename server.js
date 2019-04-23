const express = require("express"),
  logger = require("morgan"),
  mongoose = require("mongoose"),
  exphbs = require("express-handlebars"),
  PORT = process.env.PORT || 3000,
  app = express()

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines"

app.use(logger("dev"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))

app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
require("./routes/html-routes.js")(app)
require("./routes/api-routes.js")(app)

app.listen(PORT, () => console.log(`Running on localhost:${PORT}`))
