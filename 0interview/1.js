/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function (head) {
  if (!head) return null
  let map = {}
  map[head.val] = true
  let node = head.next
  let prev = head
  while (node) {
    if (map[node.val]) {
      prev.next = nodex
    }
  }
};