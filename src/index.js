var isLength = require("is_length"),
    isFunction = require("is_function"),
    isObjectLike = require("is_object_like");


module.exports = isArrayLike;


function isArrayLike(value) {
    return isObjectLike(value) && isLength(value.length) && !isFunction(value);
}
