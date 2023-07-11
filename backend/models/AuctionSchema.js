const mongoose = require("mongoose");

const auctionSchema = new mongoose.Schema({        
    itemId: {
        type: String,
        required: true,        
    },
    itemName: {
        type: String,
        required: true,        
    },
    userName: {
        type: String,
        required: true,        
    },
    userId: {
        type: String,
        required: true,        
    },
    price: {
        type: Number,
        required: true,        
    },
    
})

module.exports = mongoose.model("auction", auctionSchema)