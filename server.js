// 1.dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

require("dotenv").config();


//import models
//import routes
const managerRoutes = require("./routes/managerRoutes");
const studyRoutes = require("./routes/studyRoutes");
const formRoutes = require("./routes/formRoutes");
const loginModel = require("./models/crop")
//2.instantiations
const app = express();
const PORT = 3000;

//3.configurations
// set db connection to mongoose
mongoose.connect(process.env.DATABASE_LOCAL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.error(`Connection error: ${err.message}`);
  });

//
app.set("view engine", "pug"); //specifies the view engine
app.set("views", path.join(__dirname, "views")); //specify views directory

// 4.middleware
//
app.use(express.static(path.join(__dirname, "public"))); //specify folder for static files
app.use(express.urlencoded({ extended: true })); //parse data
app.use(express.json()); //capture data in json format

// 5.routes
//use imported routes
app.use("/", managerRoutes);
app.use("/", studyRoutes);
app.use("/", formRoutes);


app.get("*", (req, res) => {
  res.send("Error!!!!. page not found");
});

//6.bootstrapping server
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
