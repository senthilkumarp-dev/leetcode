# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        res = root.val
        def helper( node) :
            nonlocal res
            if not node :
                return 0
            leftGain  = max(0,helper(node.left))
            rightGain = max(0 , helper(node.right))
            res =  max(res , node.val + leftGain + rightGain)
            return max(leftGain , rightGain) + node.val
        helper(root)
        return res
    

         