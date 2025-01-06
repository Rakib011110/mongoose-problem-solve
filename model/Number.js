const mongoose = require("mongoose");

const numberSchema = new mongoose.Schema({
  value: { type: Number, required: true },
});

const Number = mongoose.model("Number", numberSchema);

module.exports = Number;
