var preorderTraversal = function (root) {
  let res = [];
  helper(root, res);
  return res;
};

var helper = function (node, arr) {
  if (node == null) return;
  arr.push(node.val);
  helper(node.left, arr);
  helper(node.right, arr);
};