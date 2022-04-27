const { NotImplementedError } = require('../extensions/index.js');

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
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  if (arr.length == 0) {
    return [];
  }

  if (!arr.includes('--discard-next') && !arr.includes('--discard-prev') && !arr.includes('--double-next') && !arr.includes('--double-prev')) {
    return arr;
  }

  let arrToTransform = [...arr];

  if (arrToTransform.includes('--discard-next')) {
    for (let i = 0; i < arrToTransform.length; i++) {
      if (arrToTransform[i] == '--discard-next') {
        if (arrToTransform[i + 1]) {
          arrToTransform.splice(i, 2, 'deleted');
        }
        if (!arrToTransform[i + 1]) {
          arrToTransform.splice(i, 1);
        }
      }
    }
  }

  if (arrToTransform.includes('--double-next')) {
    for (let i = 0; i < arrToTransform.length; i++) {
      if (arrToTransform[i] == '--double-next') {
        if (arrToTransform[i + 1]) {
          arrToTransform.splice(i, 1, arrToTransform[i + 1]);
        }
        if (!arrToTransform[i + 1]) {
          arrToTransform.splice(i, 1);
        }
      }
    }
  }

  if (arrToTransform.includes('--discard-prev')) {
    for (let i = 0; i < arrToTransform.length; i++) {
      if (arrToTransform[i] == '--discard-prev') {
        if (arrToTransform[i - 1] && arrToTransform[i - 1] != 'deleted') {
          arrToTransform.splice(i - 1, 2);
        }
        if (arrToTransform[i - 1] && arrToTransform[i - 1] == 'deleted') {
          arrToTransform.splice(i, 1);
        }
        if (!arrToTransform[i - 1]) {
          arrToTransform.splice(i, 1);
        }
      }
    }
  }

  if (arrToTransform.includes('--double-prev')) {
    for (let i = 0; i < arrToTransform.length; i++) {
      if (arrToTransform[i] == '--double-prev') {
        if (arrToTransform[i - 1] && arrToTransform[i - 1] != 'deleted') {
          arrToTransform.splice(i, 1, arrToTransform[i - 1]);
        }
        if (arrToTransform[i - 1] && arrToTransform[i - 1] == 'deleted') {
          arrToTransform.splice(i, 1);
        }
        if (!arrToTransform[i - 1]) {
          arrToTransform.splice(i, 1);
        }
      }
    }
  }

  if (arrToTransform.includes('deleted')) {
    for (let i = 0; i < arrToTransform.length; i++) {
      if (arrToTransform[i] == 'deleted') {
        arrToTransform.splice(i, 1);
      }
    }
  }

  return arrToTransform;
}

module.exports = {
  transform
};
