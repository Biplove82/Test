const express = require('express');
const router = express.Router();

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.get("/test-me-1", function (req, res) {
    res.send("My second ever api!")
})
router.get("/test-me-2", function (req, res) {
    res.send("My third ever api!")
})
router.get("/test-me-3", function (req, res) {
    res.send("My fourth ever api!")
})

module.exports = router;