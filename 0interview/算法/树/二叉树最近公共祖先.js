/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root == null || root == p || root == q) {  //当这棵树为空，或者根节点为p或q时，返回这个节点
    return root
  }
  let left = lowestCommonAncestor(root.left, p, q) // 左边递归
  let right = lowestCommonAncestor(root.right, p, q) // 右边递归

  //如果left和right都有值，说明root为最近公共节点，直接返回root
  if (left && right) {
    return root
  }
  //如果左右只有一个有值，那么那个值就是公共节点
  return left !== null ? left : right
};

