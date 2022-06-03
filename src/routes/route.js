const express = require("express");
const router = express.Router();
//const BookModel= require("../models/bookModel")
const BookController = require("../controllers/bookController");

router.post("/createNewBook", BookController.createNewBook);

router.get("/getAllBooks", BookController.getNewBook);

module.exports = router;
