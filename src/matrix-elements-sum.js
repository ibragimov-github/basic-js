const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    let res = 0;
    for (let x in matrix) {
        if(matrix[x-1] === undefined) {
            for (let y of matrix[x]) {
                res += +y;
            }
        }
        else {
            for (let y in matrix[x]) {
                if (matrix[x-1][y] !== 0) {
                    res += +matrix[x][y];
                }
            }
            
        }
    }
    return res;
}

module.exports = {
  getMatrixElementsSum
};

