const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  if (arr.every(el => el == -1)) {
    return arr;
  }

  if (arr.every(el => el != -1)) {
    return arr.sort((el1, el2) => el1 - el2);
  }

  if (arr.some(el => el == -1)) {
    let toSortNums = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != -1) {
        toSortNums.push(arr[i]);
      }
    }
    toSortNums.sort((el1, el2) => el1 - el2);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != -1) {
        arr.splice(i, 1, toSortNums[0]);
        toSortNums.splice(0, 1);
      }
    }
    return arr;
  }
}

module.exports = {
  sortByHeight
};
