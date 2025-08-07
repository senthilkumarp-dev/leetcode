# 230. Kth Smallest Element in a BST

## 🧾 Problem Statement

You are given the `root` of a **binary search tree (BST)** and an integer `k`.

Return the **kth smallest element** in the BST.

### ✅ Constraints:
- The BST property ensures **in-order traversal** gives **sorted node values**.
- 1 ≤ k ≤ total number of nodes.

---

## 💡 Intuition

The in-order traversal of a BST yields the **nodes in ascending order**.

So the **kth smallest element** is simply the **kth node** visited during an **in-order traversal**.

---

## 🚀 Approach

1. Perform **in-order traversal** (left ➝ root ➝ right).
2. Maintain a global counter (`count`) initialized to `k`.
3. Decrease the counter each time a node is visited.
4. When `count == 0`, the current node is the **kth smallest**, and we save its value in a result variable.

> This avoids having to store the entire in-order traversal in an array.

### Notes:
- Use `count` and `res` as static/global variables so recursive calls can update and access them.
- Exit early once the kth element is found to avoid unnecessary recursion.

---

## ⏱️ Complexity

- **Time Complexity:**  
  $$O(H + k)$$  
  Where `H` is the height of the tree. In the worst case (unbalanced), it’s $$O(n)$$. In a balanced BST, it's $$O(\log n + k)$$.

- **Space Complexity:**  
  $$O(H)$$ for recursion stack (no extra data structures used).

---

## ✅ Code
``` java []
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
    public static int count = 0;
    public static int res = 0;

    public int kthSmallest(TreeNode root, int k) {
        count = k;
        helper(root);
        return res;
    }

    public void helper(TreeNode root) {
        if (root == null) return;

        if (root.left != null) {
            helper(root.left);
        }

        count--;
        if (count == 0) {
            res = root.val;
            return;
        }

        if (root.right != null) {
            helper(root.right);
        }
    }
}
```
``` Python []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        count = k 
        result  =  0 
        def inorder(node):
            nonlocal count,result
            if not node :
                return  
            inorder(node.left)
            count -= 1
            if count == 0 :
                result = node.val
                return
            inorder(node.right)
        inorder(root)
        return result
        
```
``` Javascript []
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let result =  0;
    let count = k ;
    function inorder(node){
    if(node === null ){
        return
    }
    inorder(node.left)
    count--;
    if(count==0){
        result = node.val
        return 
    }
    inorder(node.right)
}
    inorder(root);
    return result;

};
```
