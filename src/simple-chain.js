const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    result: [],
    getLength() {
        return this.result.length;
    },
    addLink(value='') {
        this.result.push(`(${value})`);
    },
    removeLink(position) {
        if (this.result[position-1] === undefined) {
            return Error("You can't remove incorrect link!")
        }
    this.result.splice(position-1, 1);
    },
    reverseChain() {
    this.result.reverse();
    },
    finishChain() {
    return this.result.join('~~')
    }
};

module.exports = {
  chainMaker
};

