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
function deleteDigit(num) {
  let arrayNum = num.toString().split('');
  let deleteDigitNums = [];
  for (let i = 0; i < arrayNum.length; i++) {
    let initialNum = [...arrayNum];
    initialNum.splice(i, 1);
    let deleteDigitNum = parseInt(initialNum.join(''));
    deleteDigitNums.push(deleteDigitNum);
  }
  let maxNum = Math.max(...deleteDigitNums);
  return maxNum;
}

module.exports = {
  deleteDigit
};
