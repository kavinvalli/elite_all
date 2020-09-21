const router = require("express").Router();
const User = require("../models/User");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const { registerValidation, loginValidation } = require("../validation");

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send({message:error.details[0].message});

  const usernameExists = await User.findOne({ username: req.body.username });
  if (usernameExists) return res.status(400).send({message:"Username already exists"});

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    username: req.body.username,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({message:"Registration Successful",user: savedUser});
  } catch (err) {
    res.status(400).send({message:err});
  }
});

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send({message:error.details[0].message});

  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(400).send({message:"Username does not exist"});

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send({message:"Invalid Password"})

  const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)

  res.send({message: 'Logged In',token: token})
});

module.exports = router;
