/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  let res = [] //最终要返回的数组
  let queue = [root] //保存每一层节点，一开始只有根节点
  while (queue.lenth) {
    let subRes = [] //用来存放每一层的值
    let len = queue.length
    for (let i = 0; i < len; i++) { //遍历这一层的节点，
      let cur = queue.shift() //先进先出，将这个节点取出
      subRes.push(cur.val) //节点的值存入subRes
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
    }
    res.push(subRes) //一层节点遍历完以后，将subRes存入res中
  }
  return res
};