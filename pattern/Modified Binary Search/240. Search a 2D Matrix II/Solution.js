/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  let row = 0;
  let col = n - 1;
  while (row < m && col >= 0) {
    let current = matrix[row][col];
    if (current == target) {
      return true;
    } else if (current > target) {
      col--;
    } else {
      row++;
    }
  }
  return false;
};
