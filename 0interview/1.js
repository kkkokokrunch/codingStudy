/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let arr = []

  function dfs(root) {
    if (!root) return
    if (root.left) dfs(root.left)
    arr.push(root.val)
    if (root.right) dfs(root.right)
  }
  dfs(root)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i + 1]) return false
  }
  return true
};