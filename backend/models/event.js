const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    image: String,
    location: {
        lat: { type: Number, required: false },
        lng: { type: Number, required: false }
    },
    date: {
        from: {
            type: Date,
            min: Date.now,
            required: false
        },
        to: Date
    },
    price: Number,
    attendance: [String],
    tags: [String],
    createdBy: String,
    createdAt: { type: Date, default: new Date() }
});

module.exports = mongoose.model('Event', eventSchema);
