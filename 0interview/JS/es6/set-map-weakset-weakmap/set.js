const colors = new Set()
colors.add('red')
colors.add('yellow')
colors.add('blue')
    // console.log(colors)
    // console.log(colors.size)
colors.add(5)
colors.add('5')
    // console.log(colors)

colors.add(5)
    // console.log(colors)

colors.delete('red')
    // console.log(colors)

console.log(colors.has('red')) //检测set中是否有某个元素
colors.clear() //清除所有元素
console.log(colors)

const fruits = new Set(['apple', 'banana', 'pear'])
console.log(fruits)

//用set去重
const numbers = [1, 1, 2, 2, 2, 3, 4, 5, 6, 6, 6]
const numbersSet = new Set(numbers)
console.log(numbersSet)