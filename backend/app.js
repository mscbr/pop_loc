const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const eventsRoutes = require('./routes/events');
const usersRoutes = require('./routes/users');

const app = express();
const port = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(express.json()); // body-parser

app.use('/events', eventsRoutes);
app.use('/users', usersRoutes);

// CORS policy
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization, Origin, X-Requested_with'
    );
    if (req.method === 'OPTIONS') {
        res.setHeader(
            'Access-Control-Allow-Methods',
            'GET, POST, PUT, PATCH , DELETE'
        );
        return this.set.status(200).json({});
    }
    next();
});

// error handling
app.use((error, req, res, next) => {
    // if response was already sent
    if (res.headerSent) return next(error);

    res.status(error.code || 500).json({
        message: error.message || 'An unknown error occured!'
    });
});

// if none of the routes were targeted
// error creation
app.use((req, res) => {
    const error = new Error('Not found');
    error.status = 404;

    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
    next(error);
});

mongoose
    .connect(
        'mongodb+srv://mscbr:' +
            process.env.MONGO_ATLAS_PW +
            '@cluster0-1san1.mongodb.net/events_test?retryWrites=true&w=majority'
    )
    .then(() => {
        console.log('Connected to the db.');
        console.log(`Connecting on port: ${port}`);
        app.listen(port);
    })
    .catch(() => {
        console.log('Connection to the db failed!');
    });

module.exports = app;
