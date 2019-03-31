var mongoose = require("mongoose");

var draftSchema = new mongoose.Schema({
  title: String,
  markup: String
});

var Draft = mongoose.model("Draft", draftSchema);
