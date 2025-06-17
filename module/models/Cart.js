const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
    type: mongoose.Schema.Types.ObjectId, // This is a reference to a User
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
 image: {
   type:String,
  },
  quantity: {
    type: Number,
    default: 1,
    min: 1
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Chart=mongoose.model("Chart",cartSchema);
module.exports=Chart
