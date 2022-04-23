const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(dateObject) {
  if (arguments.length == 0) {
    return 'Unable to determine the time of year!';
  }

  if (isNaN(Date.parse(dateObject))) {
    throw new Error('Invalid date!');
  }

  try { dateObject.getTime() } catch {
    throw new Error('Invalid date!');
  }

  let winter = [11, 0, 1];
  let spring = [2, 3, 4];
  let summer = [5, 6, 7];
  let autumn = [8, 9, 10];

  if (winter.includes(dateObject.getMonth())) {
    return 'winter';
  }

  if (spring.includes(dateObject.getMonth())) {
    return 'spring';
  }

  if (summer.includes(dateObject.getMonth())) {
    return 'summer';
  }

  if (autumn.includes(dateObject.getMonth())) {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
