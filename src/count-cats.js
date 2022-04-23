const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(catsMatrix) {
  let catSample = '^^';
  let catsCount = 0;

  for (let i = 0; i < catsMatrix.length; i++) {
    for (let j = 0; j < catsMatrix[i].length; j++) {
      if (catsMatrix[i][j] === catSample) {
        catsCount++;
      }
    }
  }

  return catsCount;
}

module.exports = {
  countCats
};
