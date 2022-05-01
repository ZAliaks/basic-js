const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
let strN = n.toString().split('');
let digitals = strN.map((elem, index, arr) => +(arr.slice(0, index).concat(arr.slice(index+1)).join('')));
let sortDigitals = digitals.sort((a,b) => b-a)
return sortDigitals[0]
}

module.exports = {
  deleteDigit
};
