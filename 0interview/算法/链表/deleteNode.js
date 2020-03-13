var deleteNode = function (head, node) {
    if(node = head) {
        node = null
        head = null
    }else if(node.next) {
        node.val = node.next.val
        node.next = node.next.next
    }else {
        node = head
        while(node.next.next) {
            node = node.next
        }
        node.next = null
        node = null
    }
    return node
  };