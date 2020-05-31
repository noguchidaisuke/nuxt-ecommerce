const express = require('express');
const router = express.Router();
const Order = require('../models/order')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const verifyToken = require('../middlewares/verifyToken')

router.post('/payment',verifyToken,(req, res) => {
  try {
    let totalPrice = req.body.totalPrice;
    stripe.customers.create({
      email: req.decoded.email,
      source: req.body.token.token.id
    }).then(customer => {
      return stripe.charges.create({
        amount: totalPrice,
        currency: "jpy",
        customer: customer.id
      })
    }).then(async charge => {
      const order = new Order()
      order.arrivalDate = req.body.arrivalDate;
      req.body.cart.map(product => {
        order.products.push({
          productID: product._id,
          price: product.price,
          quantity: product.quantity
        })
      })

      res.json({
        success: true,
        message: "おk"
      })
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
})

module.exports = router;