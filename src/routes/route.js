const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/movies', function (req, res) {

    const movieNames=['Batman Begins','The Dark Knight','The Dark Knight Rises','IronMan']
   
    res.send(movieNames)
});

router.get('/movies/:indexNumber', function (req, res) {

    const movieNames=['Batman Begins','The Dark Knight','The Dark Knight Rises','IronMan']
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


router.get('/sol1', function (req, res) {

    let arr=[1,2,3,4,5,6,7,8,10]
    let sumNatural = (arr[arr.length-1]*(arr[arr.length-1]+1))/2;
    let sumArray=0;
    arr.forEach(x=> sumArray=sumArray+x);
    let missingNumber= sumNatural-sumArray;

    res.send("The missing number is:- "+missingNumber)

    
});


router.get('/sol2', function (req, res) {

    let arr=[33,34,36,37,38]
    let sumNatural = ((arr.length+1)*(arr[0]+arr[arr.length-1]))/2;
    let sumArray=0;
    arr.forEach(x=> sumArray=sumArray+x);
    let missingNumber= sumNatural-sumArray;

    res.send("The missing number is:- "+missingNumber)

    
});

module.exports = router;
// adding this comment for no reason