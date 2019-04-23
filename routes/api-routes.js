const axios = require("axios"),
  cheerio = require("cheerio"),
  db = require("../models")
let util = require('util')


module.exports = function (app) {

  app.get("/scrape", (req, res) => {

    axios.get("https://old.reddit.com/r/worldnews/", {
      validateStatus: function (status) {
        return status < 201; // Reject only if the status code is greater than or equal to 201
      }
    }).then(response => {

      const $ = cheerio.load(response.data)
      console.log($)
      $("div.top-matter").each((i, element) => {
        let result = {}
        result["headline"] = $(this)
          .children("p.title a")
          .text();
        console.log(result)
      })
      res.send("Scraped!")

    }).catch(err => {
      if (err.response) {
        // console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
      }
    })
  })

  app.get("/article/:id", (req, res) => {
    db.Article.findById(req.params.id)
      .populate("User")
  })

}