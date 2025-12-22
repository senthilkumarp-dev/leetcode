/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let m = board.length;
  let n = board[0].length;
  let visited = Array.from({ length: m }, () => Array(n).fill(false));
  let backtrack = (r, c, l, visisted) => {
    if (l == word.length) {
      return true;
    }

    if (
      r < 0 ||
      r >= m ||
      c < 0 ||
      c >= n ||
      l >= word.length ||
      visisted[r][c] ||
      board[r][c] != word[l]
    )
      return false;
    visisted[r][c] = true;
    if (
      backtrack(r - 1, c, l + 1, visisted) ||
      backtrack(r + 1, c, l + 1, visisted) ||
      backtrack(r, c - 1, l + 1, visisted) ||
      backtrack(r, c + 1, l + 1, visisted)
    ) {
      return true;
    }
    visisted[r][c] = false;
    return false;
  };

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] == word[0] && backtrack(r, c, 0, visited)) {
        return true;
      }
    }
  }
  return false;
};
