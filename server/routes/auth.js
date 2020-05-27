const express     = require('express');
const router      = express.Router();
const User        = require('../models/user')
const jwt         = require('jsonwebtoken')
const verifyToken = require('../middlewares/verifyToken')
const bcrypt      = require('bcrypt')

// find one user
router.get('/auth/user', verifyToken, async (req, res) => {
  try {
    let findUser = await User.findOne({_id: req.decoded._id})
    res.json({
      success: true,
      user: findUser
    })
  } catch (err) {
    res.status(500).json({
      success: false,message: err.message
    })
  }
})

// register
router.post('/auth/register', async (req, res)=>{
  if(!req.body.email)    res.json({success: false, message: "please enter email"})
  if(!req.body.password) res.json({success: false, message: "please enter password"})

  try {
    let newUser = new User();
    newUser.name     = req.body.name;
    newUser.email    = req.body.email;
    newUser.password = req.body.password;
    await newUser.save();
    const token = jwt.sign(newUser.toJSON(), process.env.SECRET, {expiresIn: 604800})

    res.json({
      success: true,
      token: token,
      message: "Successfully created a new user"
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
});

// login
router.post('/auth/login', async (req, res)=>{
  try {
    let findUser = await User.findOne({email: req.body.email})
    if (!findUser) res.status(403).json({success: false, message: 'wrong email'})

    if (bcrypt.compareSync(req.body.password, findUser.password)) {
      let token = jwt.sign(findUser.toJSON(), process.env.SECRET, { expiresIn: 604800 })
      res.json({success: true, token: token})
    } else {
      res.status(403).json({success: false, message: 'wrong password'})
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
})

module.exports = router;