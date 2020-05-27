const mongoose = require('mongoose')
const Schema   = mongoose.Schema;
const bcrypt   = require('bcrypt');

const UserSchema = new Schema({
  name: {type: String, require: true},
  email: {type: String, unique: true, required: true},
  password: {type: String, require: true}
})

UserSchema.pre ('save', function(next) {
  let user      = this;
  let saltRound = 10
  if (user.isModified('password') || user.isNew) {
    bcrypt.hash(user.password, saltRound).then(hash => {
      user.password = hash;
      next()
    }).catch((err) => {
      next(err)
    });
  } else {
    next();
  }
});

module.exports = mongoose.model('User', UserSchema)