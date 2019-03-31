var mongoose = require("mongoose");
var credits = require("../credentials");

mongoose.connect(
  //   "mongodb+srv://stalder:stalder525@lab5-bea1i.mongodb.net/test?retryWrites=true",
  `mongodb+srv://${credits.user}:${
    credits.password
  }@lab5-bea1i.mongodb.net/test?retryWrites=true`,
  { useNewUrlParser: true }
);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("Successfully connected to DB");
});
