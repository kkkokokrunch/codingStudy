let lily = {
    name: 'lily'
}
let mary = {
    name: 'mary'
}

//WeakMap没有size属性，不能循环，且属性只能是对象
const strong = new Map()
const weak = new WeakMap()

strong.set(lily, 'lily is num1')
weak.set(mary, 'mary is num2')

console.log(strong)
console.log(weak)