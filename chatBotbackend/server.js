const connectToDatabase = require("./db");
const express = require("express");
var cors = require("cors");

//Connecting to database which is exported from db.js
connectToDatabase();
//Initializing express
const app = express();
app.use(cors());
const port = 8000;
app.use(express.json());

app.use("/api/doctor", require("./Routes/Doctorinfo"));

//Listening to port
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
