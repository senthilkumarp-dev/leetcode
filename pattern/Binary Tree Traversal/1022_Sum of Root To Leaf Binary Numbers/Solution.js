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
var sumRootToLeaf = function(root) {
    
    let dfs = (node, decimal = 0)=>{
        if(!node)return 0;
        decimal = (decimal * 2) + node.val;
        if(!node.left && !node.right) return decimal;

        return dfs(node.left , decimal) + dfs(node.right, decimal);
    }
    return dfs(root);
};
