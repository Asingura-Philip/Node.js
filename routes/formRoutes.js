const express = require("express");
const router = express.Router();

//import models
const Register = require("../models/registerSchem");
const Form = require('../models/crop')

//login page
// router.get('/login',(req,res)=>{
//     res.render("login")
// })

// router.post('/login',(req,res)=>{
//     const login = new Login(req.body)
//     login.save()
//     res.redirect('/register')
//     console.log(req.body)

// })

router.get("/signup", (req, res) => {
  res.render("signup");
});
router.post("/signup", (req, res) => {
  res.json(req.body);
  console.log(req.body);
});

router.get("/register", (req, res) => {
  res.render("register");
});
router.post("/register", (req, res) => {
  const crop = new Register(req.body);
  crop.save();
//   console.log(req.body);
  res.redirect("/crops");
  // res.render("confirm")
});

router.get("/crops", async (req, res) => {
  const crops = await Register.find();
  res.render("croplist", { allCrops: crops });
});

router.get("/updatecrop/:id", async (req, res) => {
  const crop = await Register.findOne({ _id: req.params.id });
  res.render("editcrop", { title: "update crop", crop: crop });
});

router.post("/updatecrop", async (req, res) => {
    try{
        await Register.findOneAndUpdate({ _id: req.query.id }, req.body);
        res.redirect("/crops");
    }catch(err){
        console.log("error occured",err)
    }
});
router.post('/delete', async(req,res)=>{
    await Register.deleteOne({_id: req.body.id});
    res.redirect("back")
})


router.get('/form',(req,res)=>{
  res.render("form")
})

router.post('/form',(req,res)=>{
  const newForm = new Form(req.body)
  newForm.save()
  console.log(req.body)
})

module.exports = router;
