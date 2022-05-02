const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let resArr = []
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next' && i !== arr.length - 1) {
      i++
    } else {
      if (arr[i] === '--discard-prev' &&  resArr.length !== 0 & resArr.includes(arr[i - 1])
      ){
        resArr.pop()       
      } else {
        if (arr[i] === '--double-next' && i !== arr.length - 1) {
          resArr.push(arr[i + 1])
        } else {
          if (arr[i] === '--double-prev' && resArr !== 0 && resArr.includes(arr[i - 1])
          ) {
            resArr.push(resArr[resArr.length - 1])           
          } else {
            if (arr[i] !== '--discard-next' && arr[i] !== '--discard-prev' && arr[i] !== '--double-next' && arr[i] !== '--double-prev') {
            resArr.push(arr[i])}
          }
        }
      }
    }
  }
  return resArr
}

module.exports = {
  transform,
}
