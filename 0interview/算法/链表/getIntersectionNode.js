/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null
    let lengthA = getLength(headA)
    let lengthB = getLength(headB)
    let lang,short ,interval
    if(lengthA>lengthB) {
        lang = headA
        short = headB
        interval = lengthA - lengthB
    }else {
        lang = headB
        short = headA
        interval = lengthB - lengthA
    }

    while(interval--) {
        lang = lang.next
    }
    while(lang) {
        if(lang == short) return lang
        lang = lang.next
        short = short.next
    }
    return null
};

function getLength(head) {
    let current = head
    let result = 0
    while(current) {
        result++
        current = current.next
    }
    return result
}