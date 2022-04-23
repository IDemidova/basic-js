const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(teamMembers) {
  if (!Array.isArray(teamMembers)) {
    return false;
  }

  if (teamMembers.length == 0) {
    return false;
  }

  if (teamMembers.every(teamMember => (typeof teamMember) != 'string')) {
    return false;
  }

  teamMembers = teamMembers.filter(teamMember => (typeof teamMember) == 'string');

  let dreamTeam = [];
  for (let i = 0; i < teamMembers.length; i++) {
    dreamTeam.push(teamMembers[i].trim())
  }

  dreamTeam = dreamTeam.map(teamMember => teamMember[0].toUpperCase()).sort().join('');

  return dreamTeam;
}

module.exports = {
  createDreamTeam
};
