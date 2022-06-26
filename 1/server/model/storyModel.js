const mongoose = require('mongoose')

const storySchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    image: {
        public_id: {
            type: String,
        },
        url: {
            type: String
        }
    }
})