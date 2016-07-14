var isLength = require("@nathanfaucett/is_length"),
    isFunction = require("@nathanfaucett/is_function"),
    isObject = require("@nathanfaucett/is_object");


module.exports = isArrayLike;


function isArrayLike(value) {
    return !isFunction(value) && isObject(value) && isLength(value.length);
}
