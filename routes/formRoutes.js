const express = require('express')
const router = express.Router()

//import models
const Login = require('../models/crop')

//login page
router.get('/login',(req,res)=>{
    res.render("login")
})

router.post('/login',(req,res)=>{
    const login = new Login(req.body)
    login.save()
    res.redirect('/register')
    console.log(req.body)
    
})

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
    console.log(req.body)
    // res.json(req.body)
    res.render("confirm")
})

module.exports = router;