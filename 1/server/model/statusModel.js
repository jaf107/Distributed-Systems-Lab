const mongoose = require('mongoose')

const statusSchema = mongoose.Schema({
    text:{
        type: String
    },
    user:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})