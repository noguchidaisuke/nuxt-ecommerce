const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  title: {type: String, required: true},
  description: String,
  price: Number,
  photos: [String]
  // reviews: [{type: Schema.Types.ObjectId, ref: Review}],
  // categoryID: {type: Schema.Types.ObjectId, ref: Category}
})

module.exports = mongoose.model('Product', productSchema)