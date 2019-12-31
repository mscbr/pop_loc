const express = require('express');
const { check } = require('express-validator');
const eventsController = require('../controllers/events');

const router = express.Router();

router.get('/', eventsController.getEvents);
router.post(
    '/',
    [
        check('title')
            .not()
            .isEmpty()
    ],
    eventsController.createEvent
);

module.exports = router;
