const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.get('/auth/user', async (req, res) => {
  let user = await User.findOne({name: "john"})
  res.json(user)
})

module.exports = router;