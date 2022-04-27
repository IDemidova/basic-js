const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str != 'string') {
    if (str == null || str == undefined) {
      str = `${str}`
    } else if (str[Symbol.toPrimitive]) {
      str = 'STRING_OR_DEFAULT';
    } else if (str.toString) {
      str = str.toString();
    }
  }

  if (Object.keys(options).length == 0) {
    return str;
  }

  options = Object.assign({ separator: '+', additionSeparator: '|' }, options);

  let stringToRepeat = '';

  let additionToRepeat = [];

  if (options.hasOwnProperty('addition')) {
    if (typeof options.addition != 'string') {
      if (options.addition == null || str == undefined) {
        options.addition = `${options.addition}`
      } else if (options.addition[Symbol.toPrimitive]) {
        options.addition = 'STRING_OR_DEFAULT';
      } else if (options.addition.toString) {
        options.addition = options.addition.toString();
      }
    }
    if (options.additionRepeatTimes) {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        additionToRepeat.push(options.addition);
      }
      additionToRepeat = additionToRepeat.join(`${options.additionSeparator}`);
    } else {
      additionToRepeat = options.addition;
    }
    stringToRepeat = `${str}${additionToRepeat}`;
  } else {
    stringToRepeat = str;
  }

  let repeatedString = [];

  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      repeatedString.push(stringToRepeat);
    }
    repeatedString = repeatedString.join(`${options.separator}`);
  } else {
    repeatedString = stringToRepeat;
  }

  return repeatedString;
}

module.exports = {
  repeater
};
