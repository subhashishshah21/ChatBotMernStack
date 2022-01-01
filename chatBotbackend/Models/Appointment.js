const mongoose = require("mongoose");

const appointSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  date: {
    type: String,
  },
  number: {
    type: String,
  },
  tokenNumber: {
    type: String,
  },
  problem: {
    type: String,
  },
});
const appointment = mongoose.model("appointSchema", appointSchema);
module.exports = appointment;
