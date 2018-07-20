const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
/* app.get("/article/:query/:start/:end", (req,res) => {
  let q = req.params.query;
  let start = req.params.start;
  let end = req.params.end;
  res.send(request.get({
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    qs: {
      'api-key': "0746047fb6eb4680a118bdfa48d6cff8",
      'q': q,
      'begin_date': start,
      'end_date': end,
      'page': 0
    },
  }, function(err, response, body) {
    body = JSON.parse(body);
    console.log(body);
  }))
  
}); */

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
