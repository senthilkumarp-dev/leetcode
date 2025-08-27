# LeetCode 257: Binary Tree Paths

# Intuition

We need to collect all paths from the **root** to **leaf** nodes in a binary tree. Since each path is unique and we need to preserve the sequence, **Depth-First Search (DFS)** is a good fit. We can explore each path, and whenever we hit a leaf node, store the path we've built so far.

# Approach

1. Start DFS traversal from the root node.
2. Use a `StringBuilder` to build the current path.
3. For each node:
   - Append `"->"` and the node’s value to the path (skip `"->"` for the first node).
   - If it's a leaf node (no left or right), add the path to the result list.
   - Otherwise, recurse on left and right children.
4. **Backtrack**: Reset the `StringBuilder` length after each recursive call to prevent one path from leaking into another.

# Complexity

- **Time complexity:** $$O(n^2)$$
  - In the worst case (e.g., a skewed tree), there are $$O(n)$$ root-to-leaf paths.
  - Each path takes $$O(n)$$ time to build (string concatenation or `StringBuilder.toString()`).
- **Space complexity:** $$O(h)$$
  - Due to recursive call stack; `h` is the height of the tree.
  - Result list space is not counted as extra (output requirement).

# Code

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
    public List<String> binaryTreePaths(TreeNode root) {
        List<String> result = new ArrayList<>();
        dfs(root, new StringBuilder(), result);
        return result;
    }

    private void dfs(TreeNode node, StringBuilder path, List<String> result) {
        if (node == null) return;
        int len = path.length();
        if (len > 0) {
            path.append("->");
        }
        path.append(node.val);
        if (node.left == null && node.right == null) {
            result.add(path.toString());
        } else {
            dfs(node.left, path, result);
            dfs(node.right, path, result);
        }
        path.setLength(len); // Backtrack by resetting the StringBuilder
    }
}
```

```Python []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def binaryTreePaths(self, root: Optional[TreeNode]) -> List[str]:
        result = []
        self.helper(root,'',result)
        return result
    def helper(self,node,path,result):
        if node is None:
            return ;
        if len(path) > 0 :
            path+='->'
        path+= str(node.val)
        if node.left == None and node.right == None :
            result.append(path)
        else :
            self.helper(node.left,path,result)
            self.helper(node.right,path,result)
```

```Javascript []
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let path = "";
  let result = [];
  helper(root, path, result);
  return result;
};

function helper(node, path, result) {
  path += node.val;
  if (node.left == null && node.right == null) {
    result.push(path);
    return;
  }
  path += "->";
  if (node.left) {
    helper(node.left, path, result);
  }
  if (node.right) {
    helper(node.right, path, result);
  }
}

```
