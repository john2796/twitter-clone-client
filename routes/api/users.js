const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
//const passport = require("passport");

// load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// load user model
const User = require("../../models/User");

// router.get("/", (req, res) => {
//   res.send("<h1>testing</h1>");
// });

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post("/register", (req, res) => {
  //Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      // hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   POST api/users/login
// @desc    Login user and return JWT token
// @access  Public
router.post("/login", (req, res) => {
  //form validation
  const { errors, isValid } = validateLoginInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).send(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    // check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    //chech passward
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //user method
        // create jwt payload
        const payload = {
          id: user.id,
          name: user.name
        };

        //sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // one year
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer" + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

module.exports = router;