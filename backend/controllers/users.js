const uuid = require('uuid/v4');
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const User = require('../models/user');

exports.signup = async (res, req, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        throw new HttpError(
            'Invalid inputs passed, please check your data.',
            422
        );

    const { username, email, password, image } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        return next(
            new HttpError('Signing up failed, please try again later.', 500)
        );
    }

    // if user exist
    if (!existingUser) {
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
        attending: []
    });

    try {
        await createdUser.save();
    } catch (err) {
        const error = new HttpError(
            'Creating user failed, please try again.',
            500
        );
        return next(error);
    }

    res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};
