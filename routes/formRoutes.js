const express = require('express')
const router = express.Router()

//import models
const Register = require('../models/registerSchem')

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

router.get('/signup',(req,res)=>{
    res.render("signup")
})
router.post('/signup',(req,res)=>{
    res.json(req.body)
    console.log(req.body)
    
})


router.get('/register',(req,res)=>{
    
    res.render('register')
}) 
router.post('/register',(req,res)=>{
    const crop = new Register(req.body)
    crop.save()
    console.log(req.body)
    res.redirect("/crops")
    // res.render("confirm")
})

router.get("/crops" ,async(req,res)=>{
    const crops = await Register.find()
    res.render("croplist",{allCrops:crops})
})


module.exports = router;