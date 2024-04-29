const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  productName: {
    type: String,
    //required: true,
  },
  description: {
    type: String,
    //required: true,
  },
  category: {
    type: String,
    //required: true,
  },
  brand: {
    type: String,
    //required: true,
  },
  status: {
    type: String,
    //required: true,
  },
  price: {
    type: String,
    //required: true,
  },

  quantity: {
    type: String,
    //required: true,
  },
  discount: {
    type: String,
    default: 0,
    //required: true,
  },
  sellingPrice: {
    type: Number,
    //required: true,
  },
  image: {
    type: String,
    //required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

Schema.pre("save", async function (next) {
  const disprice = await ((this.discount * this.price) / 100);
  const sellingprice = this.price - disprice;
  this.sellingPrice = await sellingprice;
  next();
});
const Product = mongoose.model("product", Schema);

module.exports = Product;
