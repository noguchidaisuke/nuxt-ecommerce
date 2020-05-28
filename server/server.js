const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

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
app.use(cors())

// router
const userRoute    = require('./routes/auth')
const productRoute = require('./routes/product')
const categoryRoute = require('./routes/category')

app.use('/api', userRoute)
app.use('/api', productRoute)
app.use('/api', categoryRoute)

app.listen(4000)