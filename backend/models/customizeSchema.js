const mongoose = require("mongoose");

const customizeSchema = new mongoose.Schema({        
    title: {
        type: String,
        required: true,        
    },
    userId: {
        type: String,
        required: true,        
    },
    lcdType: {
        type: String,
        required: true,        
    },
    pcType: {
        type: String,
        required: true,        
    },
    hardType: {
        type: String,
        required: true,        
    },
    hddSpace: {
        type: String,
        required: true,        
    },
    ssdSpace: {
        type: String,
        required: true,        
    },
    grapgicCard: {
        type: String,
        required: true,        
    },
    comment: {
        type: String,
        required: true,        
    },
})

module.exports = mongoose.model("customize", customizeSchema)