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