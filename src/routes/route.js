const express = require("express");
const router = express.Router();
const BookController = require("../controllers/bookController");
const AuthorController = require("../controllers/authorController");

router.post("/createAuthor", AuthorController.createAuthor);

router.post("/createBook", BookController.createBook);

router.get("/booksByChetan", BookController.booksByChetan);

router.get("/updateBook", BookController.updateBook);

router.get("/bookCost", BookController.bookCost);

module.exports = router;
