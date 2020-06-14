const express  = require('express')
const morgan            = require('morgan')
const mongoose          = require('mongoose')
const cors              = require('cors')
const serverlessExpress = require('aws-serverless-express/middleware')
const cookieParser      = require('cookie-parser')
const csrf              = require('csurf')
require('dotenv').config()

// const isProd = () => {
//   return !!process.env.AWS_REGION
// }

mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, },err => {
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
app.use(cors({credentials: true, origin: true}))
app.use(cookieParser('dsafaasfaf'))
app.use(csrf({ cookie: true }))

// router
const userRoute     = require('./routes/auth')
const productRoute  = require('./routes/product')
const categoryRoute = require('./routes/category')
const reviewRoute   = require('./routes/review')
const addressRoute  = require('./routes/address')
const paymentRoute  = require('./routes/payment')
const orderRoute    = require('./routes/order')

app.use('/api', userRoute)
app.use('/api', productRoute)
app.use('/api', categoryRoute)
app.use('/api', reviewRoute)
app.use('/api', addressRoute)
app.use('/api', paymentRoute)
app.use('/api', orderRoute)

app.get('/api/cookies', (req, res) => {
  res.cookie('test', "xxx", {maxAge:60000, httpOnly:true });
  res.json("success!")
})

app.get('/api/csrfToken', (req, res) => {
  return res.json({ csrfToken: req.csrfToken() });
})

app.post('/api/example', (req, res) => {
  console.log(req.headers);
  return res.json("プロテク")
})

// if (isProd()) {
//   app.use(serverlessExpress.eventContext())
//   module.exports = app;
// } else {
//   app.listen(4000)
// }
app.listen(4000)