const str=` FuNcTiOnUp  `;
const trm= function trim(){
    console.log(str.trim())
}
module.exports.trim=trm;

const lower=function changetoLowerCase() {
    console.log(str.toLowerCase())
}

module.exports.lower=lower;

const upper=function changetoUpperCase() {
    console.log(str.toUpperCase())
}

module.exports.upper=upper;