const express = require('express');
const router = express.Router();
const User = require('../models/user')
const jwt = require('jsonwebtoken')
router.get('/auth/user', async (req, res) => {
  let user = await User.findOne({name: "Dan"})
  res.json(user)
})

router.get('/auth/login', (req, res, next)=>{

})

router.post('/auth/register', (req, res)=>{
  let newUser = new User();
  newUser.name = req.body.name;
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  newUser.save();
  json
  res.json({success: true, user: newUser})
})
module.exports = router;