//dependencies
const express = require("express");
const path = require('path')

//instantiations
const app = express();

//configurations
//import routes


//set view path
//pug config
app.set("view engine","pug");//specifies the view engine
app.set("views",path.join(__dirname,"views"))//specify views directory

const studyRoutes = require('./routes/studyRoutes')







//middleware
app.use(express.urlencoded({ extended: true }));
// Simple request time logger
app.use((req, res, next) => {
  console.log('A new request received at ' + Date.now());
  next();
});

//Simple request time logger for a specific route
app.use('/about', (req, res, next) => {
  console.log('A new request received at ' + Date.now());
  next();
  });
  


//routes
//use imported routes
app.use('/',studyRoutes)


app.get("*", (req, res) => {
  res.send("Error!!!!. page not found");
});



//bootstrapping server
app.listen(3000, () => console.log("listening on port 3000"));
