const express = require('express');
const lodash= require('lodash');

const router = express.Router();
const logger = require('../logger/logger.js')
const helper= require('../util/helper.js')
const formatter= require('../validator/formatter.js')

router.get('/test-me', function (req, res) {
    logger.welcome()
    helper.date()
    helper.month()
    helper.batch()
    formatter.trim()
    formatter.lower()
    formatter.upper()
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
const chunked=lodash.chunk(months,3);
console.log(chunked);
const odd=[];
for(let i=0;i<20;i++){
    if(i % 2 !== 0)
    odd.push(i);
}
const tailed= lodash.tail(odd)
console.log(tailed)
const unioned= lodash.union([2,43,32],[4,2,54,10],[32,43,56],[12,45],[99])
console.log(unioned)    
    res.send('My Hello api!')
});

module.exports = router;
// adding this comment for no reason