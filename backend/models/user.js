const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, minlength: 3 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    image: { type: String },
    events: { type: [mongoose.Types.ObjectId], ref: 'Event' },
    attending: { type: [mongoose.Types.ObjectId], ref: 'Event' }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
