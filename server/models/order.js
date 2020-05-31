const mongoose = require('mongoose')
const deepPopulate = require("mongoose-deep-populate")(mongoose)
const Schema = mongoose.Schema

const orderSchema = new Schema({
  products: [{
    productID: {type: Schema.Types.ObjectId, ref: "Product"},
    quantity: Number,
    price: Number
  }],
  arrivalDate: String
})

orderSchema.plugin(deepPopulate);

module.exports = mongoose.model('Order', orderSchema)