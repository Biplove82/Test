const express = require("express");
const router = express.Router();
const BookController = require("../controllers/bookController");
const AuthorController = require("../controllers/authorController");

router.post("/createAuthor", AuthorController.createAuthor);

router.post("/createBook", BookController.createBook);

router.get("/booksByChetan", BookController.booksByChetan);

router.get("/updateBook", BookController.updateBook);

router.get("/bookCost", BookController.bookCost);

router.get("/getAuthors", AuthorController.getAuthor)

router.get("/getBooks", BookController.getBooks)

router.get("/books-by-authorid/:Author_Id", BookController.bookByAuthor)

router.get("/authorAge" ,BookController.authorAge)

module.exports = router;
