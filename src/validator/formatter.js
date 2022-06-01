const str=` functionUp  `;
const trm= function trim(){
    return (str.trim());
}
module.exports.trim=trm;

const lower=function changetoLowerCase() {
    return (str.toLowerCase())
}

module.exports.lower=lower;

const upper=function changetoUpperCase() {
    return (str.toUpperCase())
}

module.exports.upper=upper;