const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      let nestedArrsDepths = [];
      for (let i = 0; i < arr.length; i++) {
        nestedArrsDepths.push(this.calculateDepth(arr[i]));
      }
      let maxDepth = 0;
      for (let i = 0; i < nestedArrsDepths.length; i++) {
        if (nestedArrsDepths[i] > maxDepth) {
          maxDepth = nestedArrsDepths[i];
        }
      }
      return 1 + maxDepth;
    } else {
      return 0;
    }
  }
}

module.exports = {
  DepthCalculator
};
