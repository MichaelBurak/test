//gives something to expose functions to tests in mocha
let convert = {};

convert.cToF = function (celsius) {
    if (!Number.isInteger(celsius)) return undefined;
    return celsius * 9 / 5 + 32;
}

convert.fToC = function (fahrenheit) {
    if (!Number.isInteger(fahrenheit)) return undefined;
    return (fahrenheit - 32) * 5 / 9;
}

//exports exposed functions
module.exports = convert;