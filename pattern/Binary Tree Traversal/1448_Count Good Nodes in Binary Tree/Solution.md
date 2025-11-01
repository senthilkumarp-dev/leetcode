# Intuition

A **"good node"** in a binary tree is one that is **greater than or equal to all values on the path from the root to that node**.  
So while traversing the tree, we just need to **keep track of the maximum value seen so far**.  
If the current node’s value is greater than or equal to this maximum, we count it as a good node.

---

# Approach

1. Use a **Depth-First Search (DFS)** traversal starting from the root.
2. Pass along the **maximum value seen so far** (`maxSoFar`) at each recursive call.
3. For every node:
   - If `node.val >= maxSoFar`, it’s a **good node**, so increment the count.
   - Update `maxSoFar` to the maximum of its current value and `node.val`.
4. Recursively call DFS for both left and right subtrees.
5. Sum the counts from the left and right children to get the total number of good nodes.

---

# Complexity

- **Time complexity:** `O(n)` — Each node is visited once.
- **Space complexity:** `O(h)` — Recursive stack space, where `h` is the tree height (worst case `O(n)` for skewed trees).

---

# Code

```javascript []
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  function dfs(node, maxSoFar) {
    if (!node) return 0;

    let count = node.val >= maxSoFar ? 1 : 0;
    let newMax = Math.max(maxSoFar, node.val);

    count += dfs(node.left, newMax);
    count += dfs(node.right, newMax);

    return count;
  }

  return dfs(root, Number.MIN_SAFE_INTEGER);
};
```

```java []
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int goodNodes(TreeNode root) {
        return dfs(root,Integer.MIN_VALUE);
    }
    public int dfs(TreeNode node, int maxSoFar){
        if(node == null)return 0;

        int count = (node.val >= maxSoFar)?1:0;
        int newMax = Math.max(node.val, maxSoFar);

        count += dfs(node.left,newMax);
        count += dfs(node.right,newMax);

        return count;
    }
}
```

```python []
import sys
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        def dfs(node: TreeNode, max_so_far: int):
            if not node:
                return 0
            count =  1 if (node.val >= max_so_far) else 0
            newMax = max(max_so_far,node.val)

            count += dfs(node.left,newMax)
            count += dfs(node.right,newMax)
            return count
        return dfs(root,-sys.maxsize)
```
