const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    const result = [];
    const commands = {
        '--discard-next': [],
        '--discard-prev': [],
        '--double-next': [],
        '--double-prev': []
    };
    if (!Array.isArray(arr)) {
        return Error("'arr' parameter must be an instance of the Array!");
    }
    for (let i in arr) {
        if (typeof arr[i] === 'number') {
            result.push(arr[i])
        }
        else {
            commands[arr[i]].push(+i);
        }
    }
    for (let i in commands) {
        if (i === '--discard-next') {
            for (let x of commands[i]) {
                if (result[x] !== undefined) {
                    result.splice(x, 1);
                }
            }
        }
        if (i === '--discard-prev') {
            for (let x of commands[i]) {
                if (result[x-1] !== undefined) {
                    result.splice(x-1, 1);
                }
            }
        }
        if (i === '--double-next') {
            for (let x of commands[i]) {
                if (result[x] !== undefined) {
                    result.splice(x, 0, result[x]);
                }
            }
        }
        if (i === '--double-prev') {
            for (let x of commands[i]) {
                if (result[x-1] !== undefined) {
                    result.splice(x-1, 0, result[x]);
                }
            }
        }
    }
    return result;
}

module.exports = {
  transform
};


console.log(transform([1, 2, 3, 4, 5]))
