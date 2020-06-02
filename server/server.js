const express  = require('express')
const morgan   = require('morgan')
const mongoose = require('mongoose')
const cors     = require('cors')
const serverlessExpress = require('aws-serverless-express/middleware')

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

app.get('/', (req, res) => {
  res.send("Hello World")
})
// middleware
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())
app.use(serverlessExpress.eventContext())

// router
const userRoute     = require('./routes/auth')
const productRoute  = require('./routes/product')
const categoryRoute = require('./routes/category')
const reviewRoute   = require('./routes/review')
const addressRoute  = require('./routes/address')
const paymentRoute  = require('./routes/payment')
const orderRoute  = require('./routes/order')

app.use('/api', userRoute)
app.use('/api', productRoute)
app.use('/api', categoryRoute)
app.use('/api', reviewRoute)
app.use('/api', addressRoute)
app.use('/api', paymentRoute)
app.use('/api', orderRoute)

app.listen(4000)