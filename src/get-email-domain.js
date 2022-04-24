const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let emailArray = email.split('');
  let atSymbol = '@';
  let atSymbolPosition = emailArray.lastIndexOf(atSymbol);
  let domain = emailArray.splice(atSymbolPosition + 1, emailArray.length - 1 - atSymbolPosition).join('');
  return domain;
}

module.exports = {
  getEmailDomain
};
