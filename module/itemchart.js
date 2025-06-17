// models/CartItem.js
const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  productId: String, // optional
  quantity: {
    type: Number,
    default: 1
  }
});

const Chartitem=mongoose.model('CartItem', cartItemSchema);
module.exports= Chartitem;
