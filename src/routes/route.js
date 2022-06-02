const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/movies', function (req, res) {

    const movieNames=['Batman Begins','The Dark Knight','The Dark Knight Rises','IronMan']
   
    res.send(movieNames)
});

router.get('/movies/:indexNumber', function (req, res) {

    if (req.params.indexNumber< movieNames.length)
    {   
    res.send(movieNames[req.params.indexNumber])
    }
    else {
        res.send("Enter valid indexNumber")
    }
});

router.get('/films', function (req, res) {

    const filmNames=[{id:1, name:"Don"},{id:2, name:"RaOne"},{id:3, name:"Swades"},{id:4, name:"Kal Ho Naa Ho"}]

   
    res.send(filmNames)
});

router.get('/films/:filmId', function (req, res) {

    const id= req.params.filmId
    const filmNames=[{id:1, name:"Don"},{id:2, name:"RaOne"},{id:3, name:"Swades"},{id:4, name:"Kal Ho Naa Ho"}]
    let arr=[]
    filmNames.forEach(x => {
        if (id == x.id){
            arr=x;
        }        
     });
     if (arr.length !== 0){
         res.send(arr)
     } else {
         res.send('No movie exists with this id')
     }
});

module.exports = router;
// adding this comment for no reason