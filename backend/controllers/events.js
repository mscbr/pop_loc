const Event = require('../models/event');
const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');
const mongoose = require('mongoose');
const getCoordsForAddress = require('../util/location');

exports.getEvents = async (req, res) => {
    const events = await Event.find();
    res.status(200).json(events);
};

exports.getEventById = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw new HttpError('Invalid inputs passed', 422);

    const { eventId } = req.params;
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
            'Fetching places failed, please try again later.',
            500
        );
        return next(error);
    }

    if (!events || events.length === 0) {
        return next(
            new HttpError(
                'Could not find places for the provided user id.',
                404
            )
        );
    }

    return res
        .status(200)
        .json({
            events: events.map(event => event.toObject({ getters: true }))
        });
};

exports.createEvent = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw new HttpError('Invalid inputs passed.', 422);

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
        picture:
            'https://simplyenglishedinburgh.com/wp-content/uploads/2019/07/iStock-667709450.jpg',
        location: getCoordsForAddress(address),
        date,
        price,
        attendandce: [],
        tags,
        createdBy,
        createdAt
    });

    try {
        await createdEvent.save();
    } catch (err) {
        const error = new HttpError(
            'Creating place failed, please try again.',
            500
        );
        return next(error);
    }

    res.status(201).json({ event: createdEvent });
};
