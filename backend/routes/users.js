const express = require('express');
const { check } = require('express-validator');
const usersController = require('../controllers/users');

const router = express.Router();

router.get('/', usersController.getUsers);
router.post(
    '/signup',
    [
        check('username').isLength({ min: 4 }),
        check('email').isEmail(),
        check('password').isLength({ min: 6 })
    ],
    usersController.signup
);

module.exports = router;
