const BookModel = require("../models/bookModel");

const createNewBook = async function (req, res) {
  let book = req.body;
  let savedBook = await BookModel.create(book);
  res.send({ msg: savedBook });
};

const getNewBook = async function (req, res) {
  let allBooks = await BookModel.find();
  res.send({ msg: allBooks });
};

module.exports.createNewBook = createNewBook;
module.exports.getNewBook = getNewBook;
