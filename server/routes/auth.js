const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.get('/auth/user', async (req, res) => {
  let user = await User.findOne({name: "john"})
  res.json(user)
})

router.get('/auth/login', (req, res, next)=>{

})

router.get('/auth/register', (req, res, next)=>{

})
module.exports = router;