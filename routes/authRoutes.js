const express = require('express')
const router = express.Router()

const Signup = require('../models/signup')

router.get("/signupauth",(req,res)=>{
    res.render('signup')
})

router.post("/signupauth",async(req,res)=>{
    try {
        const newUser = new Signup(req.body)
        await newUser.save()
        res.redirect('/register')
    } catch (error) {
        res.status(400).render('signup')
        console.log("Error signing up",error)
    }
})


module.exports = router