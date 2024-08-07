const express = require("express");
// const path = require("path");
const router = express.Router();

//page 1
router.get("/page1", (req, res) => {
  res.render("page1");
});

//page 2
router.get("/page2", (req, res) => {
  res.render("page2");
});

router.post("/page2", (req, res) => {
  console.log(req.body);
  res.json(req.body)
});
//page 3
router.get("/page3", (req, res) => {
  res.render("index");
});

module.exports = router;
