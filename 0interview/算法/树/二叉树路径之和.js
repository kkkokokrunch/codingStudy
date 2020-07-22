/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) return false
  if (root.left === null && root.right === null) { //只有根节点时，根节点不等于sum，就返回false，否则为true
    return sum - root.val === 0
  }
  //遍历左右子树，传入的sum应该为sum值减去根节点的值
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
};

