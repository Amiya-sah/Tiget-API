const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    reviewerName: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 50
    },
    reviewComment: {
        type: String,
        required: true,
        minLength: 10,
        maxlength: 2000
    },
    rating: {
        type: Number, 
        min: 1, 
        max: 10, 
        required: true 
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Review", reviewSchema)