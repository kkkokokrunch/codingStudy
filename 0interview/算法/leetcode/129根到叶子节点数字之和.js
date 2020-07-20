/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  if (!root) return 0
  let sum = 0
  recurse(root, 0)
  return sum

  function recurse(root, cur) {
    cur = cur * 10 + root.val
    if (!root.left && !root.right) sum += cur
    if (root.left) recurse(root.left, cur)
    if (root.right) recurse(root.right, cur)
  }
};