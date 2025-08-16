class Solution {
  // Function to return Breadth First Search Traversal of the given graph.
  bfs(adj) {
    // Code here
    let ans = [];
    let vis = [];
    let q = [];

    q.push(0);
    vis[0] = true;
    while (q.length) {
      let node = q.shift();
      ans.push(node);
      for (let it of adj[node]) {
        if (!vis[it]) {
          vis[it] = true;
          q.push(it);
        }
      }
    }
    return ans;
  }
}
