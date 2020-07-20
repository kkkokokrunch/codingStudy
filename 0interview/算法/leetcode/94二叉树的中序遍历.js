/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let arr = []
  helper(root, arr)
  return arr
};
function helper(root, arr) {
  if (root) {
    helper(root.left, arr)
    arr.push(root.val)
    helper(root.right, arr)
  }
}