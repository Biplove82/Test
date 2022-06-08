const {count}=require('console')
const AuthorModel = require("../models/authorModel");

const createAuthor = async function (req, res) {
  let author = req.body;
  let savedAuthor = await AuthorModel.create(author);
  res.send({ msg: savedAuthor});
};

const getAuthor= async function (req,res){
  let allAuthors= await AuthorModel.find()
  res.send({msg: allAuthors})
}

module.exports.createAuthor=createAuthor;
module.exports.getAuthor=getAuthor;