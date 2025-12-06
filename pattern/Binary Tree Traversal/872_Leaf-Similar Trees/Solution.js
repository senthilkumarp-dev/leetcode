/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    if(!root1 || !root2) false;
    let leaf1 = [];
    let leaf2 = [];

    let dfs = (node,leaf)=>{
        if(!node.left && !node.right){
             leaf.push(node.val);
             return
        }
        if(node.left)dfs(node.left,leaf);
        if(node.right)dfs(node.right,leaf);
        
    }
    dfs(root1,leaf1);
    dfs(root2,leaf2);
    if(leaf1.length !== leaf2.length) return false;
    for(let i = 0 ; i < leaf1.length ; i++){
        if(leaf1[i]!==leaf2[i]) return false;
    }
    return true;
};
