const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

const jwt_secret = process.env.JWT_TOKEN;

router.post(
  "/createuser",
  [
    body("name").isLength({ min: 3 }),
    body("phone").isLength({ min: 10 }),
    body("email").isEmail(),
  ],
  async (req, res) => {
    let success = false;
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ success, errors: "User Already Exist" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPasswd = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: secPasswd,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, jwt_secret);
      success = true;
      res.json({ success, authToken });
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  }
);

router.post(
  "/login",
  [body("email").isEmail(), body("password").exists()],
  async (req, res) => {
    let success = false;
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(400)
          .json({ success, errors: "Try with correct Login credentials" });
      }
      let passwdchk = await bcrypt.compare(req.body.password, user.password);
      if (!passwdchk) {
        return res
          .status(400)
          .json({ success, errors: "Try with correct Login credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, jwt_secret);
      success = true;
      res.json({ success, authToken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.get('/getuserdata',fetchuser,async(req,res) => {
    try{
        userId = req.user.id;
        const user = await User.findById(userId).select("-password")
        res.send(user)
    }catch(error){
        console.log(error.message);
        res.status(500).send("Internal Server Error")
    }
})

module.exports = router;
