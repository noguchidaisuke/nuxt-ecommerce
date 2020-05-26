const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

require('dotenv').config()

mongoose.connect(process.env.DATABASE,{useNewUrlParser: true, useUnifiedTopology: true},err => {
  if (err) {
    console.log(err)
  } else {
    console.log("connected mongoDB Atlas")
  }
})

// app
const app = express();

// middleware
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// router
const userRoute = require('./routes/auth')

app.use(userRoute)

app.listen(4000)