const mongoose = require('mongoose')

const statusSchema = mongoose.Schema({
    text:{
        type: String,
        required: true
    },

    user_UUID:{
        type: String,
        required: true
    },
    
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Status", statusSchema);