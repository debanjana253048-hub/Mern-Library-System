const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  count: { type: Number, default: 1 },
  image: String
});

module.exports = mongoose.model("Book", BookSchema);