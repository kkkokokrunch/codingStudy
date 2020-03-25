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
var levelOrder = function(root) {
  let res = []
  if(root === null) return res
  let queue = []
  let cur = root
  queue.push(root) //先将头节点入队，保证队内此时不为空
  let level = 0 //此时在树的第一层
  while(queue.length !== 0) {
    res.push([])
    let len = queue.length //刚开始只有头节点，长度为1
    for (let i = 0; i < len;i++) { //循环队列
      cur = queue.shift() //将第一个值出队，作为cur
      res[level].push(cur.val) //进入结果数组
      cur.left && queue.push(cur.left) //如果当前节点有左节点，就将左节点入队
      cur.right && queue.push(cur.right)//如果当前节点有右节点，就将右节点入队
    }
    level++ //队列为空时，level向下移动一层
  }
  return res
};