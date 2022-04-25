const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length == 0) {
    return {};
  }

  if (domains.length > 0) {
    let domainsNames = [];
    for (let i = 0; i < domains.length; i++) {
      domainsNames.push(domains[i].split('.'));
    }
    for (let i = 0; i < domainsNames.length; i++) {
      for (let j = 0; j < domainsNames[i].length; j++) {
        domainsNames[i][j] = `.${domainsNames[i][j]}`;
      }
    }

    let sampleDomainName = domainsNames.find(domain => domain.length == 2);
    let firstLevelDomain = sampleDomainName[sampleDomainName.length - 1];
    let secondLevelDomain = sampleDomainName[0];
    let thirdLevelDomains = [];
    for (let i = 0; i < domainsNames.length; i++) {
      if (domainsNames[i].length == 3) {
        thirdLevelDomains.push(domainsNames[i][0]);
      }
    }

    let domainsCombinations = [];
    domainsCombinations.push(firstLevelDomain);
    domainsCombinations.push(`${firstLevelDomain}${secondLevelDomain}`);
    if (thirdLevelDomains.length > 0) {
      for (let i = 0; i < thirdLevelDomains.length; i++) {
        domainsCombinations.push(`${firstLevelDomain}${secondLevelDomain}${thirdLevelDomains[i]}`);
      }
    }

    let domainsStats = {};
    for (let i = 0; i < domainsCombinations.length; i++) {
      domainsStats[domainsCombinations[i]] = 0;
    }

    let transformedDomainsNames = [];
    for (let i = 0; i < domainsNames.length; i++) {
      if (domainsNames[i].length == 2) {
        transformedDomainsNames.push(`${domainsNames[i][1]}${domainsNames[i][0]}`);
      }
      if (domainsNames[i].length === 3) {
        transformedDomainsNames.push(`${domainsNames[i][2]}${domainsNames[i][1]}${domainsNames[i][0]}`);
      }
    }

    for (let i = 0; i < transformedDomainsNames.length; i++) {
      for (let j = 0; j < domainsCombinations.length; j++) {
        if (transformedDomainsNames[i].search(domainsCombinations[j]) != -1) {
          domainsStats[domainsCombinations[j]]++;
        }
      }
    }

    return domainsStats;
  }
}

module.exports = {
  getDNSStats
};
