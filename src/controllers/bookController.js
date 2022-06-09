const BookModel = require("../models/bookModel");
const AuthorModel = require("../models/authorModel");
const PublisherModel = require("../models/publisherModel");


const createBook = async function (req, res) {
  let book = req.body;
  let authorData = await AuthorModel.find().select({ _id: 1 });
  let publisherData = await PublisherModel.find().select({ _id: 1 });
  let authorID = authorData.map(function (x) {
    return x._id.toString();
  });
  let publisherID = publisherData.map(function (x) {
    return x._id.toString();
  });
  if (!(book.author && book.publisher)) {
    res.send({ msg: "Entry is missing" });
  } else if (
    !(authorID.includes(book.author) && publisherID.includes(book.publisher))
  ) {
    res.send({ msg: "ID is not valid" });
  } else {
    let bookData = await BookModel.create(book);
    res.send({ data: bookData });
  }
};

const getBooksData = async function (req, res) {
  let books = await BookModel.find().populate("author").populate("publisher");
  res.send({ data: books });
};


const putBook= async function (req,res){
 let publisher= await PublisherModel.find({'name':{$in: ['Penguin', 'HarperCollins']}}).select({_id:1})
 let publisherID= publisher.map(function(x){
   return x._id.toString()
 })
 let author = await AuthorModel.find({rating:{$gt:3.5}}).select({_id:1})
 let authorID= author.map(function(x){
  return x._id.toString()
})
 let books= await BookModel.updateMany({publisher:publisherID},{isHardCover: true})
 let book=  await BookModel.updateMany({author:authorID},{$inc:{price:10}})
 
 res.send({ data: books,book });
 
 


}

module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.putBook = putBook;
