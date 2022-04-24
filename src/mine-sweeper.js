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
  let field = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let mines = 0;
      if (i == 0) {
        if (j == 0) {
          if (matrix[i][j + 1] == true) {
            mines++;
          }
          if (matrix[i + 1][j] == true) {
            mines++;
          }
          if (matrix[i + 1][j + 1] == true) {
            mines++;
          }
        }
        if (j > 0 && j < matrix[i].length - 1) {
          if (matrix[i][j - 1] == true) {
            mines++;
          }
          if (matrix[i][j + 1] == true) {
            mines++;
          }
          if (matrix[i + 1][j] == true) {
            mines++;
          }
          if (matrix[i + 1][j - 1] == true) {
            mines++;
          }
          if (matrix[i + 1][j + 1] == true) {
            mines++;
          }
        }
        if (j == matrix[i].length - 1) {
          if (matrix[i][j - 1] == true) {
            mines++;
          }
          if (matrix[i + 1][j] == true) {
            mines++;
          }
          if (matrix[i + 1][j - 1] == true) {
            mines++;
          }
        }
      }
      if (i > 0 && i < matrix.length - 1) {
        if (j == 0) {
          if (matrix[i - 1][j] == true) {
            mines++;
          }
          if (matrix[i - 1][j + 1] == true) {
            mines++;
          }
          if (matrix[i][j + 1] == true) {
            mines++;
          }
          if (matrix[i + 1][j] == true) {
            mines++;
          }
          if (matrix[i + 1][j + 1] == true) {
            mines++;
          }
        }
        if (j > 0 && j < matrix[i].length - 1) {
          if (matrix[i - 1][j] == true) {
            mines++;
          }
          if (matrix[i - 1][j - 1] == true) {
            mines++;
          }
          if (matrix[i - 1][j + 1] == true) {
            mines++;
          }
          if (matrix[i][j - 1] == true) {
            mines++;
          }
          if (matrix[i][j + 1] == true) {
            mines++;
          }
          if (matrix[i + 1][j] == true) {
            mines++;
          }
          if (matrix[i + 1][j - 1] == true) {
            mines++;
          }
          if (matrix[i + 1][j + 1] == true) {
            mines++;
          }
        }
        if (j == matrix[i].length - 1) {
          if (matrix[i - 1][j] == true) {
            mines++;
          }
          if (matrix[i - 1][j - 1] == true) {
            mines++;
          }
          if (matrix[i][j - 1] == true) {
            mines++;
          }
          if (matrix[i + 1][j] == true) {
            mines++;
          }
          if (matrix[i + 1][j - 1] == true) {
            mines++;
          }
        }
      }
      if (i == matrix.length - 1) {
        if (j == 0) {
          if (matrix[i - 1][j] == true) {
            mines++;
          }
          if (matrix[i - 1][j + 1] == true) {
            mines++;
          }
          if (matrix[i][j + 1] == true) {
            mines++;
          }
        }
        if (j > 0 && j < matrix[i].length - 1) {
          if (matrix[i - 1][j] == true) {
            mines++;
          }
          if (matrix[i - 1][j - 1] == true) {
            mines++;
          }
          if (matrix[i - 1][j + 1] == true) {
            mines++;
          }
          if (matrix[i][j - 1] == true) {
            mines++;
          }
          if (matrix[i][j + 1] == true) {
            mines++;
          }
        }
        if (j == matrix[i].length - 1) {
          if (matrix[i - 1][j] == true) {
            mines++;
          }
          if (matrix[i - 1][j - 1] == true) {
            mines++;
          }
          if (matrix[i][j - 1] == true) {
            mines++;
          }
        }
      }
      row.push(mines);
    }
    field.push(row);
  }
  return field;
}

module.exports = {
  minesweeper
};
