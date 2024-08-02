//dependencies
const express = require("express");

//instantiations
const app = express();

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
app.get("/", (req, res) => {
  // new
  res.send("Homepage! Hello world.");
});

app.get("/first", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


app.get("/quotes", (req, res) => {
  res.sendFile(__dirname + "/quotes.html");
});
app.post("/quotes", (req, res) => {
  console.log(req.body);
});

app.get("/about", (req, res) => {
  // new
  res.send("About page. This is a node.js page with express.");
});

app.get("/details", (req, res) => {
  res.send("these are member details");
});

app.post("/tell", (req, res) => {
  res.send("tell me more");
});

app.put("/talk", (req, res) => {
  res.send("this is put");
});
app.delete("/del", (req, res) => {
  res.send("delete one");
});
app.get("*", (req, res) => {
  res.send("Error!!!!. page not found");
});



//bootstrapping server
app.listen(3000, () => console.log("listening on port 3000"));
