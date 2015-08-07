var isLength = require("is_length"),
    isFunction = require("is_function"),
    isObject = require("is_object");


module.exports = isArrayLike;


function isArrayLike(value) {
    return !isFunction(value) && isObject(value) && isLength(value.length);
}
