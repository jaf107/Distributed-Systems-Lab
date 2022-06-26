const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        select: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("User", userSchema);