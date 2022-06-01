const express = require('express');

const router = express.Router();
const logger = require('../logger/logger.js')
const helper= require('../util/helper.js')
const formatter= require('../validator/formatter.js')

router.get('/test-me', function (req, res) {
    logger.welcome()
    helper.date()
    helper.month()
    helper.batch()
    formatter.trim()
    formatter.lower()
    formatter.upper()
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason