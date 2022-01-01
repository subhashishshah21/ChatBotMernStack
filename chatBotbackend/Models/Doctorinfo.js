const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  specification: {
    type: String,
  },
  time: {
    type: String,
  },
  isActive: {
    type: Boolean,
  },
});
const doctinfo = mongoose.model("doctinfo", doctorSchema);
module.exports = doctinfo;
