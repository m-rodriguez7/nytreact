const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact"
const db = require("./models/index");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Define API routes here

mongoose.connect(MONGODB_URI);

// Send every other request to the React app
// Define any API routes before this runs

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/articles", (req,res) => {
  console.log("hello")
  db.Article.find({})
    .then(dbArticle => {
        res.json(dbArticle);
    })
    .catch(err => {
      res.json(err);
    });
})

app.post("/articles/:title/:date/:url", (req,res) => {
  console.log("world");
  const article = {};
  article.title = String(req.params.title);
  article.date = String(req.params.date);
  article.url = String(req.params.url);
  db.Article.create(article)
    .then(dbArticle => {
      console.log(dbArticle);
    })
    .catch(err => {
      return res.json(err);
    })
});

app.delete("/articles/:title", (req, res) => {
  console.log("exterminate");
  db.Article.remove({
    title: req.params.title
  })
  .then(dbArticle => {
    res.json(dbArticle);
  })
  .catch(err => {
    res.json(err);
  })
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});




app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
