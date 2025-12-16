/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let n = isConnected.length;
  let visited = Array(n).fill(false);
  let bfs = (c) => {
    let queue = [c];
    visited[c] = true;
    let idx = 0;
    while (idx < queue.length) {
      let city = queue[idx++];
      for (let next = 0; next < n; next++) {
        if (isConnected[city][next] == 1 && !visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      }
    }
  };
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      bfs(i);
      count++;
    }
  }
  return count;
};
