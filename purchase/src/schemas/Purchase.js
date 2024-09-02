const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  userId: String,
  title: String,
  value: Number,
});

module.exports = mongoose.model("Purchase", purchaseSchema);
