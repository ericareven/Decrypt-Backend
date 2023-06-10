// const express = require('express')
// // import { useEffect, useState } from "react"
// // import { Route, Routes } from 'react-router-dom'
// const bcrypt = require('bcrypt')
// const db = require('../models/Index')

// const register = (req, res) => {
//     const salt = bcrypt.genSaltSync(10);
//     req.body.password = bcrypt.hashSync(req.body.password, salt);
//     db.User.findOne({username: req.body.username}, (err, userExists))
//         .then((createdUser)=> {
//             req.session.currentUser = createdUser
//             if(userExists){
//                 res.status(404).json({message: 'Username already taken'})
//             } else {
//                 res.status(200).json({data: createdUser})
//             }
//         })
//     }

// const signIn = (req, res) => {
//     db.User.findOne({username: req.body.username}, (err, foundUser))
//     .then((foundUser) => {
//         const validLogin = bcrypt.compareSync(req.body.password, foundUser.password)
//         if(validLogin){
//             req.session.currentUser = foundUser
//             res.status(201).json({data: foundUser, message: 'You are signed in'})
//         } else {
//             res.status(400).json({message: 'Wrong username or password'})
//         }
//     })
// }

// const signOut = (req, res) => {
//     db.User.findOne({username: req.body.username})
//     .then(() => {
//         req.session.destroy()
//     })
// }


// module.exports = {
//     register,
//     signIn,
//     signOut,
// }

// const router = require('express').Router()
// const { users } = require('../controllers')
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// // const keys = require("../config/keys");
// // Load input validation
// // const validateRegisterInput = require("../validation/register");
// // const validateLoginInput = require("../validation/signin");
// // Load User model
// const User = require("../models/User");

// router.post("/signin", (req, res) => {
//     // Form validation
//   const { errors, isValid } = validateLoginInput(req.body);
//   // Check validation
//     if (!isValid) {
//       return res.status(400).json(errors);
//     }
//   const email = req.body.email;
//     const password = req.body.password;
//   // Find user by email
//     User.findOne({ email }).then(user => {
//       // Check if user exists
//       if (!user) {
//         return res.status(404).json({ emailnotfound: "Email not found" });
//       }
//   // Check password
//       bcrypt.compare(password, user.password).then(isMatch => {
//         if (isMatch) {
//           // User matched
//           // Create JWT Payload
//           const payload = {
//             id: user.id,
//             // name: user.name
//           };
//   // Sign token
//           jwt.sign(
//             payload,
//             keys.secretOrKey,
//             {
//               expiresIn: 31556926 // 1 year in seconds
//             },
//             (err, token) => {
//               res.json({
//                 success: true,
//                 token: "Bearer " + token
//               });
//             }
//           );
//         } else {
//           return res
//             .status(400)
//             .json({ passwordincorrect: "Password incorrect" });
//         }
//       });
//     });
//   });
  

// router.post("/register", (req, res) => {
//     // Form validation
//   const { errors, isValid } = validateRegisterInput(req.body);
//   // Check validation
//     if (!isValid) {
//       return res.status(400).json(errors);
//     }
//   User.findOne({ email: req.body.email }).then(user => {
//       if (user) {
//         return res.status(400).json({ email: "Email already exists" });
//       } else {
//         const newUser = new User({
//           name: req.body.name,
//           email: req.body.email,
//           password: req.body.password
//         });
//   // Hash password before saving in database
//         bcrypt.genSalt(10, (err, salt) => {
//           bcrypt.hash(newUser.password, salt, (err, hash) => {
//             if (err) throw err;
//             newUser.password = hash;
//             newUser
//               .save()
//               .then(user => res.json(user))
//               .catch(err => console.log(err));
//           });
//         });
//       }
//     });
//   });


// module.exports = router;