const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  // new
  res.send("Homepage! Hello world.");
});

router.get("/house", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//quotes page
router.get("/quotes", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "quotes.html"));
});
router.post("/quotes", (req, res) => {
  console.log(req.body);
});

//agent page
router.get("/agent", (req, res) => {
  res.sendFile(__dirname + "/agent.html");
});

router.post("/agent", (req, res) => {
  console.log(req.body);
});

//crop page
router.get("/crop", (req, res) => {
  res.sendFile(__dirname + "/crop.html");
});
router.post("/crop", (req, res) => {
  console.log(req.body);
});

router.get("/about", (req, res) => {
  // new
  res.send("About page. This is a node.js page with express.");
});

router.get("/details", (req, res) => {
  res.send("these are member details");
});

router.post("/tell", (req, res) => {
  res.send("tell me more");
});

router.put("/talk", (req, res) => {
  res.send("this is put");
});
router.delete("/del", (req, res) => {
  res.send("delete one");
});




router.get("/first", (req, res) => {
  res.render("index");
});

router.post("/first", (req, res) => {
  console.log(req.body);
});



module.exports = router;


//add navbars
//login
//sign-up
//register crop