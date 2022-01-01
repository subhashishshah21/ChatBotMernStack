const mongoose = require("mongoose");
//connection string from mongodb
const dbUrl =
  "mongodb://localhost:27017/subhssnotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

//Function to connect to database using mangoose.connect which takes in connection string and a call back function
const connectToDatabase = () => {
  mongoose.connect(dbUrl, () => {
    console.log("Connected to database");
  });
};
module.exports = connectToDatabase;
