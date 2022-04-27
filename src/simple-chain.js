const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value = '( )') {
    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || !this.chain[position - 1]) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let result = this.chain;
    this.chain = [];
    return result.join('~~');
  }
};

module.exports = {
  chainMaker
};
