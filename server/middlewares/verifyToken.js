const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  let authorization = req.headers['authorization'];
  let token = authorization.split(' ')[1]
  if (!token) res.status(401).json({success: false, message: "No Token"})

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) res.json({success: false, message: err.message})
    req.decoded = decoded
    next()
  })
}