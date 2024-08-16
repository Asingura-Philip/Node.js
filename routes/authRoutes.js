const express = require("express");
const router = express.Router();
const passport = require("passport");

const Signup = require("../models/signup");
const Register = require("../models/registerSchem");

router.get("/signupauth", (req, res) => {
  res.render("signup");
});

// router.post("/signupauth",async(req,res)=>{
//     try {

//         const newUser = new Signup(req.body)
//         await newUser.save()
//         res.redirect('/registerauth')
//     } catch (error) {
//         res.status(400).render('signup')
//         console.log("Error signing up",error)
//     }
// })

router.post("/signupauth", async (req, res) => {
  try {
    // added
    const existingUser = await Signup.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(400)
        .send("Not registered, a user with a similar email already exists!");
    }
    const user = new Signup(req.body);
    await Signup.register(user, req.body.password, (err) => {
      if (err) {
        throw err;
      }
      res.redirect("/loginauth");
    });
  } catch (err) {
    res.status(400).render("signup", { tittle: "Signup" });
    console.log("Signup user error", err);
  }
});

router.get("/loginauth", (req, res) => {
    res.render("login");
  });
// Login admin
router.post("/loginauth", passport.authenticate("local", { failureRedirect: "/loginauth" }),
(req, res) => {
req.session.user = req.user; //assigning a session to a user who has logged in
if(req.user.role === "manager"){
res.redirect("/profile");
// res.send("Manager dashboard");
} else if(req.user.role === "salesAgent"){
// res.redirect("/salesdashboard");
res.send("Saleagent dashboard");
} else {
res.send("user with that role does not exist in the system")
}

}
);

// Logout route
router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).send("Error logging out");
      }
      res.redirect("/");
    });
  }
});

router.get("/registerauth", (req, res) => {
  res.render("reg");
});

router.post("/registerauth", async (req, res) => {
  try {
    const newReg = new Register(req.body);
    await newReg.save();
  } catch (err) {
    res.end("AN ERROR OCCURED", err);
  }
});

router.get('/profile', async(req,res)=>{
  try{
    const users = await Signup.find().sort({$natural:-1});;
    res.render("profile",{allUsers:users})
  }catch(err){
    res.status(400).send("unable to send")
  }
})



// // get produce update form
// router.get("/updateProduce/:id", async (req, res) => {
//   try {
//   const item = await Produce.findOne({ _id: req.params.id });
//   res.render("edit_produce", {
//   title: "Update Produce",
//   produce: item,
//   });
//   } catch (err) {
//   res.status(400).send("Unable to find item in the database");
//   }
//   });
  
//   // post updated produce
//   router.post("/updateProduce", async (req, res) => {
//   try {
//   await Produce.findOneAndUpdate({ _id: req.query.id }, req.body);
//   res.redirect("/produceList");
//   } catch (err) {
//   res.status(404).send("Unable to update item in the database");
//   }
//   });



// // delete Produce
// router.post("/deleteProduce", async (req, res) => {
//   try {
//   await Produce.deleteOne({ _id: req.body.id });
//   res.redirect("back");
//   } catch (err) {
//   res.status(400).send("Unable to delete item in the database");
//   }
//   });





/*

router.get("/makeSale", (req, res) => {
  res.render("add_sale");
});

router.post("/makeSale", async (req, res) => {
  req.session.user = req.user;
  try {
    const newSale = new Sale(req.body);
    newSale.save();

    // Either
    // If all see the same page after saving the sale
    res.redirect("/reciept");
    // end of either

    // or
    // If each sees a different page after saving the sale
    if (req.user.role === "manager") {
      res.redirect("/saleslist");
    }
    if (req.user.role === "salesagent") {
      res.redirect("/reciept");
    }
    // end of or
  } catch (error) {
    console.log("Make sale error", error);
  }
});
*/
module.exports = router;
