const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  acc = 0;
  let s1_unique = [];
  let s2_unique = [];
  s1.split('').forEach(element => {
    if (s1_unique.indexOf(element) === -1) {
        s1_unique.push(element);
    }  
  });
  s2.split('').forEach(element => {
    if (s2_unique.indexOf(element) === -1) {
        s2_unique.push(element);
    }  
  });
  s1_unique.forEach(element => {
    el1 = s1.split(`${element}`).length - 1;
    el2 = s2.split(`${element}`).length - 1;
    if (el1 <= el2) {
        acc += el1;
    }
    else {
        acc += el2;
    }
});
  return acc;
}

module.exports = {
  getCommonCharacterCount
};

