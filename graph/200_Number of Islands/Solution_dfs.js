/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  let m = grid.length;
  let n = grid[0].length;
  let dfs = (row, col) => {
    const dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    for (let [delcol, delrow] of dirs) {
      let nrow = row + delrow;
      let ncol = col + delcol;
      if (
        nrow >= 0 &&
        nrow < m &&
        ncol >= 0 &&
        ncol < n &&
        grid[nrow][ncol] == "1"
      ) {
        grid[nrow][ncol] = "0";
        dfs(nrow, ncol);
      }
    }
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        grid[i][j] === "0";
        dfs(i, j);
        count++;
      }
    }
  }
  return count;
};
