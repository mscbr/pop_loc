const uuid = require('uuid/v4');
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const User = require('../models/user');

exports.getUsers = async (req, res, next) => {
    // fetching user data but password
    let users;
    try {
        users = await User.find({}, '-password');
    } catch (err) {
        return next(
            new HttpError('Fetching users failed, please try again later', 500)
        );
    }
    res.status(200).json({
        users: users.map(user => user.toObject({ getters: true }))
    });
};

exports.signup = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        next(
            new HttpError('Invalid inputs passed, please check your data.', 422)
        );

    const { username, email, password } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        return next(
            new HttpError('Signing up failed, please try again later.', 500)
        );
    }

    // if user exist
    if (existingUser) {
        return next(
            new HttpError('User exists already, please login instead.', 422)
        );
    }

    const createdUser = new User({
        username,
        email,
        password,
        image:
            'https://simplyenglishedinburgh.com/wp-content/uploads/2019/07/iStock-667709450.jpg',
        events: [],
        attending: [],
        requests: []
    });

    try {
        await createdUser.save();
    } catch (err) {
        const error = new HttpError(
            'Saving user failed, please try again.',
            500
        );
        return next(error);
    }

    res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};
