/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  let m = grid.length;
  let n = grid[0].length;
  let bfs = (row, col) => {
    let queue = [[row, col]];
    grid[row][col] = "0";
    let idx = 0;
    while (idx < queue.length) {
      let [r, c] = queue[idx++];
      const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];
      for (let [delcol, delrow] of dirs) {
        let nrow = r + delrow;
        let ncol = c + delcol;
        if (
          nrow >= 0 &&
          nrow < m &&
          ncol >= 0 &&
          ncol < n &&
          grid[nrow][ncol] == "1"
        ) {
          grid[nrow][ncol] = "0";
          queue.push([nrow, ncol]);
        }
      }
    }
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        bfs(i, j);
        count++;
      }
    }
  }
  return count;
};
