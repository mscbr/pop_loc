const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    image: String,
    address: String,
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
    requests: {
        type: [
            {
                user: { type: mongoose.Types.ObjectId, ref: 'User' },
                pending: Boolean,
                accepted: Boolean
            }
        ]
    },
    attendance: [
        { type: mongoose.Types.ObjectId, required: true, ref: 'User' }
    ],
    tags: [String],
    createdBy: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
    createdAt: { type: Date, default: new Date() }
});

module.exports = mongoose.model('Event', eventSchema);
