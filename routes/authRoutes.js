const express = require('express')
const router = express.Router()

const Signup = require('../models/signup')
const Register = require('../models/registerSchem')

router.get("/signupauth",(req,res)=>{
    res.render('signup')
})

router.post("/signupauth",async(req,res)=>{
    try {
        const newUser = new Signup(req.body)
        await newUser.save()
        res.redirect('/registerauth')
    } catch (error) {
        res.status(400).render('signup')
        console.log("Error signing up",error)
    }
})

router.get('/registerauth',(req,res)=>{
    res.render('register')
})

router.post('/registerauth',(req,res)=>{
    const newReg = new Register(req.body)
    newReg.save()
})

module.exports = router