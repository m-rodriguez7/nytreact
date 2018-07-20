const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const request = require("request");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Define API routes here

const db = process.env.MONGODB_URI || "mongodb://localhost/nytreact";
mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.error(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});


// Send every other request to the React app
// Define any API routes before this runs

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});




app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});




app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
