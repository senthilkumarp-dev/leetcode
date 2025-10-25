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
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> answer = new ArrayList<>();
        helper(root, answer);
        return answer;
    }
    public void helper(TreeNode node , List<Integer> answer){
        if(node == null){
            return;
        }
        helper(node.left,answer);
        answer.add(node.val);
        helper(node.right,answer);

    }
}