const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    acc = 1;
    arrAcc = [];
    for (let i = 1; i <= str.length; i++) {
        if (str[i] !== str[i-1]) {
            if (acc !== 1) {
                arrAcc.push(`${acc}${str[i-1]}`)
                acc = 1;
            }
            else {
                arrAcc.push(str[i-1])
            }
        }
        else {
            acc ++;
        }
    }
    return arrAcc.join('');
}

module.exports = {
  encodeLine
};


console.log(encodeLine('abbcca'))