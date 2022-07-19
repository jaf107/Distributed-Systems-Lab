const mongoose = require('mongoose')

const statusSchema = mongoose.Schema({
    text:{
        type: String,
        required: true
    },

    uuid:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    user_name:{
        type: String,
    },
    
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Status", statusSchema);