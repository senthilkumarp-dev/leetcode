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
    public  int result = Integer.MIN_VALUE;
    public int maxPathSum(TreeNode root) {
          helper(root);
        return result;
       
    }

    public int helper ( TreeNode node ){
     if (node == null) return 0;

        // Only take positive contributions
        int leftGain = Math.max(helper(node.left), 0);
        int rightGain = Math.max(helper(node.right), 0);

        // Current path sum including both children
        int currentPathSum = node.val + leftGain + rightGain;

        // Update result if it's better to start a new path
        result = Math.max(result, currentPathSum);

        // For recursion: return the max gain the parent could get from this node
        return node.val + Math.max(leftGain, rightGain);
    }
}