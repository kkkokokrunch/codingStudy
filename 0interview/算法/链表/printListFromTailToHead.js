function ListNode(x) {
    this.val = x
    this.next = null
}
function printListFromTailToHead(head) {
    const array = []
    while(head) {
        array.unshift(head.val)
        head = head.next
    }
    return array
}