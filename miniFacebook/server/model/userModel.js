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
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Role' 
        }
    ],
    createdAt:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("User", userSchema);