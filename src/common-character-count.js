const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  str1 = str1.split('');
  str2 = str2.split('');
  let minStr;
  let maxStr;
  if (str1.length > str2.length) {
    minStr = str2;
    maxStr = str1;
  } else {
    minStr = str1;
    maxStr = str2;
  }
  let commonCharactersCount = 0;
  minStr.forEach(character => {
    if (maxStr.includes(character)) {
      commonCharactersCount++;
      maxStr.splice(maxStr.indexOf(character), 1);
    }
  });
  return commonCharactersCount;
}

module.exports = {
  getCommonCharacterCount
};
