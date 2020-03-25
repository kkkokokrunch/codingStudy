/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
  let res= []
  function dp(root) {
    if(root == null) return
    let right = dp(root.right)
    res.push(root.val)
    let left = dp(root.left)
  }
  dp(root)
  return res[k-1]
};