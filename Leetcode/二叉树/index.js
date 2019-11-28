var tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4
        }
    },
    right: {
        value: 3,
        left: {
            value: 5,
            left: {
                value: 7
            },
            right: {
                value: 8
            }
        },
        right: {
            value: 6
        }
    }
}

//先序遍历
var preOrder = function(node) {
    if (node) {
        console.log(node.value)
        preOrder(node.left)
        preOrder(node.right)
    }
}

// preOrder(tree)

//深度优先 不使用递归
var preOrderUnRecur = function(node) {
    if (!node) {
        throw new Error('empty tree')
    }
    var stack = []
    stack.push(node)
    while (stack.length !== 0) {
        node = stack.pop()
        console.log(node.value)
        if (node.right) {
            stack.push(node.right)
        }
        if (node.left) {
            stack.push(node.left)
        }
    }
}
preOrderUnRecur(tree)

//广度优先 非递归
function BreadthFirstUnRecur(biTree) {
    let queue = []
    queue.push(biTree)
    while (queue.length !== 0) {
        let node = queue.shift()
        console.log(node.value)
        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
    }
}