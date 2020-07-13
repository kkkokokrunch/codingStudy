//A InstanceOf B
function InstanceOf(leftValue, rightValue) {
    if (typeof leftValue !== 'object') return false
    let rightProto = rightValue.prototype
    leftValue = leftValue.__proto__
    while (true) {
        if (leftValue === null) {
            return false
        }
        if (leftValue === rightProto) {
            return true
        }
        leftValue = leftValue.__proto__
    }
}