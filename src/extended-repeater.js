const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let repeatTimes = options['repeatTimes']=== undefined ? 1:options['repeatTimes'];
    let separator = options['separator']=== undefined ? '+':options['separator'];
    let addition = options['addition']=== undefined ? '':options['addition'];
    let additionRepeatTimes = options['additionRepeatTimes']=== undefined ? 1:options['additionRepeatTimes'];
    let additionSeparator = options['additionSeparator']=== undefined ? '|':options['additionSeparator'];
    str = String(str);
    addition = String(addition);
    const results = [];
    const sepArr = [];
    sepArr.push(addition);
    for (let i = 1; i<additionRepeatTimes; i++) {
        sepArr.push(addition);
    }
    results.push(`${str}${sepArr.join(additionSeparator)}`);
    for (let i = 1; i < repeatTimes; i++) {
        results.push(`${str}${sepArr.join(additionSeparator)}`);
    }
    return results.join(separator);
}

module.exports = {
  repeater
};


const test = repeater('la', { repeatTimes: 3 });
console.log(test)