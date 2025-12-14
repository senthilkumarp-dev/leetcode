// link to the problem: https://www.geeksforgeeks.org/problems/shortest-job-first/1
// User function Template for javascript
/**
 * @param {TreeNode} bt
 * @returns {number}
 */

class Solution {
  // Function to solve the given problem.
  solve(bt) {
    // your code here
    let n = bt.length;
    bt.sort((a, b) => a - b);
    let t = 0;
    let w = 0;
    for (let p of bt) {
      w += t;
      t += p;
    }
    return (w / n) >> 0;
  }
}
