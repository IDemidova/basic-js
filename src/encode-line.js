const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let initialStr = str.split('');
  let encodedStr = [];

  let i = 0;
  let symbolsCount;
  let currentSymbol;

  while (i < initialStr.length) {
    symbolsCount = 0;
    currentSymbol = initialStr[i];
    while (initialStr[i] == currentSymbol) {
      i++;
      symbolsCount++;
    }
    symbolsCount == 1 ? encodedStr.push(currentSymbol) : encodedStr.push(symbolsCount, currentSymbol);
  }

  return encodedStr.join('');
}

module.exports = {
  encodeLine
};
