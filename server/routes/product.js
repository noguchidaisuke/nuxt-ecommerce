const express = require('express');
const router  = express.Router();
const Product = require('../models/product')
const upload  = require('../middlewares/uploadPhoto')

// post
router.post('/products', upload.array("photos",4), async (req, res) => {
  try {
    const files         = req.files.map(file => file.location)

    let product         = new Product();
    product.title       = req.body.title;
    product.description = req.body.description;
    product.price       = req.body.price;
    product.photos.push(...files);

    await product.save()

    res.json({
      success: true,
      product: product
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
});

//get one
router.get('/products/:id', async (req, res) => {
  try {
    let product = await Product.findOne({_id: req.params.id})
    res.json({
      success: true,
      product: product
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
})

module.exports = router;