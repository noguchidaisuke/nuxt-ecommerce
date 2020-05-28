const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: Number,
  photos: [{ type: String, required: true }],
  categoryID: { type: Schema.Types.ObjectId, ref: 'Category' }
    // reviews: [{type: Schema.Types.ObjectId, ref: Review}]
})

module.exports = mongoose.model('Product', productSchema)