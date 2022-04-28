const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(modification = true) {
    this.modification = modification;
    this.vigenereTable = this.fillVigenereTable();
    this.lettersIndexes = this.fillLettersIndexes();
  }

  fillVigenereTable() {
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let vigenereTable = [];
    let i = 0;
    do {
      let vigenereTableRow = [...letters]
      vigenereTable.push(vigenereTableRow);
      let letterToChange = letters.splice(0, 1);
      letters.push(...letterToChange);
      i++;
    } while (i < letters.length)
    return vigenereTable;
  }

  fillLettersIndexes() {
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let lettersIndexes = {};
    for (let i = 0; i < letters.length; i++) {
      lettersIndexes[letters[i]] = i;
    }
    return lettersIndexes;
  }

  encrypt(string, keyword) {
    if (!string || !keyword) {
      throw new Error('Incorrect arguments!');
    }

    string = string.split('');
    keyword = keyword.split('');
    let regExp = /[a-zA-Z]/;

    let stringToEncrypt = [];
    let i = 0;
    let j = 0;
    while (stringToEncrypt.length < string.length) {
      if (string[i].match(regExp)) {
        stringToEncrypt.push(keyword[j].toUpperCase());
        i++;
        if (j == keyword.length - 1) {
          j = 0;
        } else {
          j++;
        }
      } else {
        stringToEncrypt.push(string[i])
        i++;
      }
    }

    let encryptedString = [];
    let k = 0;
    while (encryptedString.length < stringToEncrypt.length) {
      if (string[k].match(regExp)) {
        let row = this.vigenereTable[this.lettersIndexes[string[k].toUpperCase()]];
        let column = this.lettersIndexes[stringToEncrypt[k]];
        encryptedString.push(row[column]);
      } else {
        encryptedString.push(string[k]);
      }
      k++;
    }

    if (this.modification == true) {
      encryptedString = encryptedString.join('');
    } else {
      encryptedString = encryptedString.reverse().join('');
    }

    return encryptedString;
  }

  decrypt(string, keyword) {
    if (!string || !keyword) {
      throw new Error('Incorrect arguments!');
    }

    string = string.split('');
    keyword = keyword.split('');
    let regExp = /[a-zA-Z]/;

    let stringToDecrypt = [];
    let i = 0;
    let j = 0;
    while (stringToDecrypt.length < string.length) {
      if (string[i].match(regExp)) {
        stringToDecrypt.push(keyword[j].toUpperCase());
        i++;
        if (j == keyword.length - 1) {
          j = 0;
        } else {
          j++;
        }
      } else {
        stringToDecrypt.push(string[i])
        i++;
      }
    }

    let decryptedString = [];
    let k = 0;
    while (decryptedString.length < string.length) {
      if (stringToDecrypt[k].match(regExp)) {
        let row = this.vigenereTable[this.lettersIndexes[stringToDecrypt[k].toUpperCase()]];
        let column = row.indexOf(string[k]);
        decryptedString.push(this.vigenereTable[0][column]);
      } else {
        decryptedString.push(stringToDecrypt[k]);
      }
      k++;
    }

    if (this.modification == true) {
      decryptedString = decryptedString.join('');
    } else {
      decryptedString = decryptedString.reverse().join('');
    }

    return decryptedString;
  }
}

module.exports = {
  VigenereCipheringMachine
};
