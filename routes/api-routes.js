const axios = require("axios"),
    cheerio = require("cheerio"),
    db = require("../models")
let util = require('util')


module.exports = function (app) {

    app.get("/scrape", (req, res) => {

        axios.get("https://old.reddit.com/r/worldnews/")
            .then(response => {

                let $ = cheerio.load(response.data)

                $("div.top-matter").each((i, element) => {
                    let result = {}
                    result["headline"] = $(this)
                    .children("p.title a")
                    .text();
                    console.log(result)                    
                })

                res.send("Scraped!")

            })

    })

    app.get("/article/:id", (req, res) => {
        db.Article.findById(req.params.id)
            .populate("User")
    })

}