# Intuition

The problem asks to **invert (mirror) a binary tree**, meaning we need to swap the left and right children of every node in the tree.

# Approach

We use a simple **recursive approach**:

1. If the node is `null`, return immediately.
2. Swap the left and right child nodes.
3. Recursively call the function on both children.
4. Continue this process for all nodes in the tree.

This ensures that every subtree is also inverted, resulting in a fully mirrored binary tree.

# Complexity

- **Time complexity:** `O(n)` — Each node is visited once.
- **Space complexity:** `O(h)` — For recursion stack, where `h` is the height of the tree (worst case `O(n)` for a skewed tree).

# Code

```javascript
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  helper(root);
  return root;
};

var helper = function (node) {
  if (node == null) {
    return;
  }
  let temp = node.left;
  node.left = node.right;
  node.right = temp;
  helper(node.left);
  helper(node.right);
};
```

```java
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
    public TreeNode invertTree(TreeNode root) {
        helper(root);
        return root;
    }
    public static void helper(TreeNode node){
        if(node == null){
            return;
        }
        TreeNode temp = node.left ;
        node.left = node.right;
        node.right = temp;
        helper(node.left);
        helper(node.right);

    }
}
```
