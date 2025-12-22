/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let ans = 0;
  let backTrack = (row, col, diag1, diag2) => {
    if (row == n) {
      ans++;
      return;
    }

    for (let i = 0; i < n; i++) {
      if (col[i] || diag1[row + i] || diag2[row - i + n - 1]) continue;
      col[i] = diag1[row + i] = diag2[row - i + n - 1] = true;
      backTrack(row + 1, col, diag1, diag2);
      col[i] = diag1[row + i] = diag2[row - i + n - 1] = false;
    }
  };
  backTrack(
    0,
    Array(n).fill(false),
    Array(2 * n - 1).fill(false),
    Array(2 * n - 1).fill(false)
  );
  return ans;
};
