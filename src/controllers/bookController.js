const BookModel = require("../models/bookModel");
const AuthorModel = require("../models/authorModel");

const createBook = async function (req, res) {
  let book = req.body;
  let savedBook = await BookModel.create(book);
  res.send({ msg: savedBook });
};

const booksByChetan = async function (req, res) {
  let author = await AuthorModel.find({ author_name: "Chetan Bhagat" }); //.select({author_id:1,_id:0})
  let ID = author[0].author_id;

  let chetanBooks = await BookModel.find({ author_id: ID });

  res.send({ msg: chetanBooks });
};

const updateBook = async function (req, res) {
  let chetanBooks = await BookModel.findOneAndUpdate(
    { name: "Two states" },
    { price: 100 },
    { new: true }
  );
  let ID = chetanBooks.author_id;
  let newPrice = chetanBooks.price;

  let author = await AuthorModel.find({ author_id: ID });
  let authorName = author[0].author_name;

  res.send({ msg: { authorName, newPrice } });
};

const bookCost = async function (req, res) {
  let books = await BookModel.find({ price: { $gte: 50, $lte: 100 } });
  let authors = [];
  for (let i = 0; i < books.length; i++) {
    let arr = await AuthorModel.find({ author_id: books[i].author_id }); //.select({author_name:1,_id:0})
    authors.push(arr);
  }
  // console.log (books[1])
  //console.log (authors[1][0])
  let combine = {};

  for (let i = 0; i < books.length; i++) {
    combine[books[i].name] = authors[i][0].author_name;
  }

  res.send({ msg: combine });
};

const bookByAuthor = async function (req, res) {
  let id = req.params.Author_Id;

  const books = await BookModel.find({ author_id: id }).select({
    name: 1,
    _id: 0,
  });

  res.send({ msg: books });
};

const authorAge = async function (req, res) {
  let rate = await BookModel.find({ ratings: { $gt: 4 } });
  let id = rate.map(function (x) {
    return x.author_id;
  });

  let authors = await AuthorModel.find({
    $and: [{ author_id: id }, { age: { $gt: 50 } }],
  }).select({ author_name: 1, age: 1, _id: 0 });

  res.send({ msg: authors });
};

const getBooks = async function (req, res) {
  let allBooks = await BookModel.find();
  res.send({ msg: allBooks });
};

module.exports.createBook = createBook;
module.exports.booksByChetan = booksByChetan;
module.exports.updateBook = updateBook;
module.exports.bookCost = bookCost;
module.exports.getBooks = getBooks;
module.exports.bookByAuthor = bookByAuthor;
module.exports.authorAge = authorAge;
