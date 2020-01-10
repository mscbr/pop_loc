const Event = require('../models/event');
const User = require('../models/user');
const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');
const mongoose = require('mongoose');
const getCoordsForAddress = require('../util/location');

exports.getEvents = async (req, res) => {
    const events = await Event.find();
    res.status(200).json(
        events.map(event => event.toObject({ getters: true }))
    );
};

exports.getEventById = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        next(
            new HttpError('Invalid inputs passed, please check your data.', 422)
        );

    const eventId = req.params.eid;
    let event;

    try {
        event = await Event.findById(eventId);
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not find an event',
            500
        );
        return next(error);
    }

    if (!event) {
        const error = new HttpError(
            'Could not find a pace for provided id.',
            404
        );
        return next(error);
    }

    // getters: true - mongoose adds "id:", apart from "_id:"
    return res.status(200).json({ event: event.toObject({ getters: true }) });
};

exports.getEventsByUserId = async (req, res, next) => {
    const userId = req.params.uid;
    let events;
    try {
        events = await Event.find({ createdBy: userId });
    } catch (err) {
        const error = new HttpError(
            'Fetching events failed, please try again later.',
            500
        );
        return next(error);
    }

    if (!events || events.length === 0) {
        return next(
            new HttpError(
                'Could not find events for the provided user id.',
                404
            )
        );
    }

    return res.status(200).json({
        events: events.map(event => event.toObject({ getters: true }))
    });
};

exports.getEventsByMultiple = async (req, res, next) => {
    const searchParams = req.params.search
        .split('+')
        .join(' ')
        .toLowerCase();
    // regex flags - case insensitive + global search
    const searchRegex = new RegExp(searchParams, 'ig');
    let events;

    try {
        // regex search in particular fields
        events = await Event.find({}).or([
            { title: searchRegex },
            { description: searchRegex },
            { address: searchRegex },
            { tags: searchRegex }
        ]);
    } catch (err) {
        // request failed
        return next(
            new HttpError(
                'Fetching events failed, please try again later.',
                404
            )
        );
    }

    // if there are no results
    if (!events || events.length === 0) {
        return next(
            new HttpError(
                'Could not find events for the provided search parameters.',
                404
            )
        );
    }

    return res.status(200).json({
        // getters: true in order to have readable id's
        events: events.map(event => event.toObject({ getters: true }))
    });
};

exports.createEvent = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        next(
            new HttpError('Invalid inputs passed, please check your data.', 422)
        );

    const {
        title,
        description,
        address,
        date,
        price,
        tags,
        createdBy,
        createdAt
    } = req.body;

    const createdEvent = new Event({
        title,
        description,
        image:
            'https://simplyenglishedinburgh.com/wp-content/uploads/2019/07/iStock-667709450.jpg',
        address,
        location: await getCoordsForAddress(address),
        date,
        price,
        attendandce: [],
        tags,
        createdBy,
        createdAt
    });

    let user;
    try {
        user = await User.findById(createdBy);
    } catch (err) {
        return next(
            new HttpError('Creating place failed, please try again', 500)
        );
    }

    if (!user) {
        return next(new HttpError('Could not find user for provided id', 404));
    }

    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await createdEvent.save({ session });
        user.events.push(createdEvent); // only adds event id
        await user.save({ session });
        await session.commitTransaction(); // save
    } catch (err) {
        const error = new HttpError(
            'Creating place failed, please try again.',
            500
        );
        return next(error);
    }

    res.status(201).json({ event: createdEvent });
};

exports.updateEvent = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        next(
            new HttpError('Invalid inputs passed, please check your data.', 422)
        );

    const eventId = req.params.eid;
    const { title, description, image, address, date, price, tags } = req.body;

    let event;

    try {
        event = await Event.findById(eventId);
    } catch (err) {
        // request failed
        return next(
            new HttpError('Something went wrong, could not update place.', 500)
        );
    }

    event.title = title || event.title;
    event.description = description || event.description;
    event.image = image || event.image;
    event.address = address || event.address;
    event.location = address
        ? await getCoordsForAddress(address)
        : event.location;
    event.date = date || event.date;
    event.price = price || event.price;
    event.tags = tags || event.tags;

    try {
        await event.save();
    } catch (err) {
        return next(
            new HttpError('Something went wrong, could not update place.', 500)
        );
    }

    res.status(200).json({ event: event.toObject({ getters: true }) });
};

exports.deleteEvent = async (req, res, next) => {
    const eventId = req.params.eid;

    let event;
    try {
        event = await Event.findById(eventId);
    } catch (err) {
        return next(
            new HttpError('Something went wrong, could not delete place.', 500)
        );
    }

    try {
        await event.remove();
    } catch (err) {
        return next(
            new HttpError('Something went wrong, could not delete place.', 500)
        );
    }

    res.status(200).json({ message: 'Deleted place.' });
};
