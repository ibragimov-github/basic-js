const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let arr = String(n).split('');
    let res = 0;
    for (let i in arr) {
        let test = arr.slice(0);
        test[i] = '';
        if (res < +test.join('')) {
            res = +test.join('');
        }
    }
    return res;
}

module.exports = {
  deleteDigit
};

