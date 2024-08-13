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
if(req.user.username === "jj"){
// res.redirect("/managerdashboard");
res.send("Manager dashboard");
} else if(req.user.username === "rick"){
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
