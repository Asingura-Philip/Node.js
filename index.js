//dependencies
const express = require("express");
const path = require('path')

//instantiations
const app = express();

//configurations
//import routes
const studyRoutes = require('./routes/studyRoutes')

//set view path
app.set('views',path.join(__dirname,'views'))




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


// app.get("*", (req, res) => {
//   res.send("Error!!!!. page not found");
// });



//bootstrapping server
app.listen(3000, () => console.log("listening on port 3000"));
