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
        this.result.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (!Number.isInteger(position)|| !(position > 0 && position < this.result.length)) {
            this.result.length = 0;
            throw new Error("You can\'t remove incorrect link!");        
        }
        this.result.splice(position-1, 1);
    },
    reverseChain() {
    this.result.reverse();
    return this;
    },
    finishChain() {
    const returnResult = this.result.join('~~');
    this.result.length = 0;
    return returnResult;
    }
};

module.exports = {
  chainMaker
};

