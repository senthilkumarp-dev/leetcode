# Intuition
A tree is symmetric if its left subtree is a mirror reflection of its right subtree.  
So, we can recursively compare nodes from the left and right sides to check if they mirror each other.

---

# Approach
1. If the tree is empty, it’s symmetric.  
2. Use a helper function that takes two nodes (`leftNode` and `rightNode`):  
   - If both are `null`, return `true`.  
   - If one is `null` but the other isn’t, return `false`.  
   - Check if their values are equal **and**  
     - the left child of `leftNode` matches the right child of `rightNode`, and  
     - the right child of `leftNode` matches the left child of `rightNode`.  
3. Start the recursion with `root.left` and `root.right`.

---

# Complexity
- **Time complexity:** $$O(n)$$ — every node is visited once.  
- **Space complexity:** $$O(h)$$ — recursion stack space (where `h` is tree height).

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
var isSymmetric = function(root) {
    if (!root) return true;
    return helper(root.left, root.right);
};

var helper = function(leftNode, rightNode) {
    if (!leftNode && !rightNode) return true;
    if (!leftNode || !rightNode) return false;
    return (
        leftNode.val === rightNode.val &&
        helper(leftNode.left, rightNode.right) &&
        helper(leftNode.right, rightNode.left)
    );
};
```
``` Java []
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
    public boolean isSymmetric(TreeNode root) {
        return helper(root.left,root.right);
    }
    public boolean helper(TreeNode n1,TreeNode n2){
        if(n1 == null && n2== null){
            return true;
        }
        if(n1 == null || n2== null){
            return false;
        }
        return n1.val == n2.val && helper(n1.left,n2.right)&& helper(n1.right,n2.left);
    }
}
```