const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

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

app.listen(3000, () => console.log("listening on port 3000"));
