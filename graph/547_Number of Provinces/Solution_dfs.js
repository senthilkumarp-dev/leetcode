/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let n = isConnected.length;
  let visited = Array(n).fill(false);
  let dfs = (city) => {
    visited[city] = true;
    for (let next = 0; next < n; next++) {
      if (isConnected[city][next] == 1 && !visited[next]) {
        dfs(next);
      }
    }
  };
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      count++;
    }
  }
  return count;
};
