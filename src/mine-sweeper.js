const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    let matrixResult = matrix.map(item => {
        return [...item]
    });
    for (let indexArray in matrix) {
        indexArray = +indexArray
        let acc = 0;
        for (let indexElement in matrix[indexArray]) {
            indexElement = + indexElement
            if (indexElement === 0) {
                if (indexArray === 0) {
                    if(matrix[indexArray][indexElement+1] === true) {acc++}
                    if(matrix[indexArray+1][indexElement] === true) {acc++}
                    if(matrix[indexArray+1][indexElement+1] === true) {acc++}
                    matrixResult[indexArray][indexElement] = acc;
                    acc = 0;
                }
                if (indexArray === matrix.length -1) {
                    if(matrix[indexArray][indexElement+1] === true) {acc++}
                    if(matrix[indexArray-1][indexElement] === true) {acc++}
                    if(matrix[indexArray-1][indexElement+1] === true) {acc++}
                    matrixResult[indexArray][indexElement] = acc;
                    acc = 0;
                }
                else if (indexArray !== 0 && indexArray !== matrix.length -1 ){
                    if(matrix[indexArray][indexElement+1] === true) {acc++}
                    if(matrix[indexArray-1][indexElement] === true) {acc++}
                    if(matrix[indexArray-1][indexElement+1] === true) {acc++}
                    if(matrix[indexArray+1][indexElement] === true) {acc++}
                    if(matrix[indexArray+1][indexElement+1] === true) {acc++}
                    matrixResult[indexArray][indexElement] = acc;
                    acc = 0;
                }
            }
            if (indexElement === matrix[indexArray].length -1) {
                if (indexArray === 0) {
                    if(matrix[indexArray][indexElement-1] === true) {acc++}
                    if(matrix[indexArray+1][indexElement-1] === true) {acc++}
                    if(matrix[indexArray+1][indexElement] === true) {acc++}
                    matrixResult[indexArray][indexElement] = acc;
                    acc = 0;
                }
                if (indexArray === matrix.length -1) {
                    if(matrix[indexArray][indexElement-1] === true) {acc++}
                    if(matrix[indexArray-1][indexElement-1] === true) {acc++}
                    if(matrix[indexArray-1][indexElement] === true) {acc++}
                    matrixResult[indexArray][indexElement] = acc;
                    acc = 0;
                }
                else if (indexArray !== 0 && indexArray !== matrix.length -1 ){
                    if(matrix[indexArray][indexElement-1] === true) {acc++}
                    if(matrix[indexArray-1][indexElement-1] === true) {acc++}
                    if(matrix[indexArray-1][indexElement] === true) {acc++}
                    if(matrix[indexArray+1][indexElement] === true) {acc++}
                    if(matrix[indexArray+1][indexElement+1] === true) {acc++}
                    matrixResult[indexArray][indexElement] = acc;
                    acc = 0;
                }
            }
            if (indexArray === 0) {
                if (indexElement !== 0 && indexElement !== matrix[indexArray].length -1) {
                    if(matrix[indexArray][indexElement+1] === true) {acc++}
                    if(matrix[indexArray][indexElement-1] === true) {acc++}
                    if(matrix[indexArray+1][indexElement] === true) {acc++}
                    if(matrix[indexArray+1][indexElement-1] === true) {acc++}
                    if(matrix[indexArray+1][indexElement+1] === true) {acc++}
                    matrixResult[indexArray][indexElement] = acc;
                    acc = 0;
                }
            }
            if (indexArray === matrix.length -1) {
                if (indexElement !== 0 && indexElement !== matrix[indexArray].length -1) {
                    if(matrix[indexArray][indexElement+1] === true) {acc++}
                    if(matrix[indexArray][indexElement-1] === true) {acc++}
                    if(matrix[indexArray-1][indexElement] === true) {acc++}
                    if(matrix[indexArray-1][indexElement+1] === true) {acc++}
                    if(matrix[indexArray-1][indexElement-1] === true) {acc++}
                    matrixResult[indexArray][indexElement] = acc;
                    acc = 0;
                }
            }
            if (indexArray !== 0 && indexArray !== matrix.length -1) {
                if (indexElement !== 0 && indexElement !== matrix[indexArray].length -1) {
                    if(matrix[indexArray][indexElement+1] === true) {acc++}
                    if(matrix[indexArray][indexElement-1] === true) {acc++}
                    if(matrix[indexArray+1][indexElement] === true) {acc++}
                    if(matrix[indexArray-1][indexElement] === true) {acc++}
                    if(matrix[indexArray-1][indexElement-1] === true) {acc++}
                    if(matrix[indexArray-1][indexElement+1] === true) {acc++}
                    if(matrix[indexArray+1][indexElement+1] === true) {acc++}
                    if(matrix[indexArray+1][indexElement-1] === true) {acc++}
                    matrixResult[indexArray][indexElement] = acc;
                    acc = 0;
                }
            }
        }
    }
    return matrixResult;
}

module.exports = {
  minesweeper
};

const matrix = [
    [true, false, false],
    [false, true, false],
    [false, false, false]
   ];
console.log(minesweeper(matrix))