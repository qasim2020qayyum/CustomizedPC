const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    default: () => Math.floor(Math.random() * 900000) + 100000, // generate a random 6-digit order ID
    unique: true,
    // required: true
  },
  userId: {
    type: String,
  },
  productId: {
    type: String,
  },
  productName: {
    type: String,
    // required: true
  },
  orderDate: {
    type: String,
    default: Date.now(),
    // required: true
  },
  quantity: {
    type: String,
    // required: true
  },
  status: {
    type: String,
    default: "Processing",
  },
  totalPrice: {
    type: String,
    default: 0,
  },
});

module.exports = mongoose.model("Order", orderSchema);
