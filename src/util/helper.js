const printDate=function(){
    let currentdate= new Date();
    console.log("Current Date : " + currentdate)
}
module.exports.date=printDate;

const printMonth =function (){
    let currentdate= new Date();
    let currentmonth = currentdate.getMonth()+1;
    console.log("Current Month : " + currentmonth)
}
module.exports.month=printMonth;

const batchInfo=function  (){
    console.log("Radon W3D2 ,the topic for today is Node.js module System")
}
module.exports.batch=batchInfo;