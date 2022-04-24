const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(filesNames) {
  if (filesNames.length == 0) {
    return filesNames;
  }

  function findUniqueNames(filesNames) {
    let uniqueNames = {};
    for (let i = 0; i < filesNames.length; i++) {
      if (!(filesNames[i] in uniqueNames)) {
        uniqueNames[filesNames[i]] = [i];
      } else {
        uniqueNames[filesNames[i]].push(i);
      }
    }
    return uniqueNames;
  }

  function changeFilesNames(filesNames, uniqueNames) {
    for (let name in uniqueNames) {
      for (let i = 0; i < uniqueNames[name].length; i++) {
        if (i != 0) {
          filesNames[uniqueNames[name][i]] = `${filesNames[uniqueNames[name][i]]}(${i})`;
        }
      }
    }
    return filesNames;
  }

  let uniqueNames = findUniqueNames(filesNames);

  if (Object.keys(uniqueNames).length == filesNames.length) {
    return filesNames;
  }

  if (Object.keys(uniqueNames).length != filesNames.length) {
    while (Object.keys(uniqueNames).length < filesNames.length) {
      filesNames = changeFilesNames(filesNames, uniqueNames);
      uniqueNames = findUniqueNames(filesNames);
    }
    return filesNames;
  }
}

module.exports = {
  renameFiles
};
