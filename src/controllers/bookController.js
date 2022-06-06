const BookModel = require("../models/bookModel");

const createBook = async function (req, res) {
  let book = req.body;
  let savedBook = await BookModel.create(book);
  res.send({ msg: savedBook });
};

const bookList = async function (req, res) {
  let allBooks = await BookModel.find().select({
    bookName: 1,
    authorName: 1,
    _id: 0,
  });
  res.send({ msg: allBooks });
};

const getBooksInYear = async function (req, res) {
  let bookYear = req.body;
  let savedBooks = await BookModel.find({year:bookYear.year})
  res.send({ msg: savedBooks });
};


const getParticularBooks = async function (req, res) {
    let condition = req.body;
    let particularBooks = await BookModel.find(condition)
    res.send({ msg: particularBooks });
  };




const getXINRBooks =async function (req, res) {

    
    let INRBooks = await BookModel.find({$or:[{'price.indianPrice': "100INR"},{'price.indianPrice': "200INR"},{'price.indianPrice': "500INR"}]});
    
    res.send({ msg: INRBooks });
  };


const getRandomBooks =async function (req, res) {
    
    let randomBooks = await BookModel.find({$or:[{stockAvailable: true},{totalPages:{$gte:500}}]});
    
    res.send({ msg: randomBooks });
  };

const getNewBook = async function (req, res) {
  let allBooks = await BookModel.find();
  res.send({ msg: allBooks });
};

module.exports.createBook = createBook;
module.exports.getNewBook = getNewBook;
module.exports.bookList = bookList;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRBooks=getXINRBooks;
module.exports.getRandomBooks =getRandomBooks ;