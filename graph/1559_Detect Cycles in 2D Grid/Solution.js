/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let visited = Array.from({ length: m }, () => Array(n).fill(0));
  let dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let detectCycle = (sr, sc, ch) => {
    let queue = [[sr, sc, -1, -1]];
    visited[sr][sc] = 1;
    let idx = 0;
    while (idx < queue.length) {
      let [r, c, pr, pc] = queue[idx++];

      for (let [dr, dc] of dirs) {
        let nr = r + dr;
        let nc = c + dc;
        if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
        if (nr == pr && nc == pc) continue;
        if (grid[nr][nc] !== ch) continue;
        if (visited[nr][nc] == 1) {
          return true;
        }
        queue.push([nr, nc, r, c]);
        visited[nr][nc] = 1;
      }
    }

    return false;
  };
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (visited[r][c] == 0) {
        if (detectCycle(r, c, grid[r][c])) {
          return true;
        }
      }
    }
  }
  return false;
};
