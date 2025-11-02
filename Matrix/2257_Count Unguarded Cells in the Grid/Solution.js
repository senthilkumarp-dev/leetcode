/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function (m, n, guards, walls) {
  let grid = Array.from({ length: m }, () => Array(n).fill(0));
  let ans = 0;
  // 0 free , 1 - wall , 2 - guard ,3 - guardable
  //fill guards
  for (let [r, c] of guards) {
    grid[r][c] = 2;
  }
  //fill walls
  for (let [r, c] of walls) {
    grid[r][c] = 1;
  }
  function setGuardedCell(r, c) {
    // north
    for (let i = c - 1; i >= 0; i--) {
      if (grid[r][i] == 1 || grid[r][i] == 2) {
        break;
      }
      grid[r][i] = 3;
    }
    // south
    for (let i = c + 1; i < n; i++) {
      if (grid[r][i] == 1 || grid[r][i] == 2) {
        break;
      }
      grid[r][i] = 3;
    }
    // west
    for (let i = r - 1; i >= 0; i--) {
      if (grid[i][c] == 1 || grid[i][c] == 2) {
        break;
      }
      grid[i][c] = 3;
    }
    // east
    for (let i = r + 1; i < m; i++) {
      if (grid[i][c] == 1 || grid[i][c] == 2) {
        break;
      }
      grid[i][c] = 3;
    }
  }
  for (let [r, c] of guards) {
    setGuardedCell(r, c);
  }
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] == 0) {
        ans++;
      }
    }
  }
  return ans;
};
