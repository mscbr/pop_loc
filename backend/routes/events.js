const express = require('express');
const { check } = require('express-validator');
const eventsController = require('../controllers/events');

const router = express.Router();

router.get('/', eventsController.getEvents);
// search?params=
router.get('/search', eventsController.getEventsByMultiple);
router.get('/:eid', eventsController.getEventById);
router.get('/user/:uid', eventsController.getEventsByUserId);
router.patch('/:eid', eventsController.updateEvent);
router.post(
    '/',
    [
        check('title')
            .not()
            .isEmpty()
    ],
    eventsController.createEvent
);
router.delete('/:eid', eventsController.deleteEvent);

module.exports = router;
