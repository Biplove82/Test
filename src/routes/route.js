const express = require('express');

const router = express.Router();
const logger = require('./logger')

router.get('/test-me', function (req, res) {

    logger.log()
    res.send(logger.url)
    res.send('My first ever api! and above is written in another file')
});
router.get('/test-me2', function (req, res) {
    res.send('Hello')
});
router.get('/test-me2', function (req, res) {
    res.send('World')
});
router.get('/test-me4', function (req, res) {
    res.send('Hi')
});

module.exports = router;
// adding this comment for no reason