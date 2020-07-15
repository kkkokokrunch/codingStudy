// let a = 'wn'
// let b = a
// a = '蜗牛'
// console.log(b)


// let a = {
//     name: 'wn',
//     book: {
//         title: 'you dont konw js',
//         price: '45'
//     }
// }

// let b = a
// a.name = '蜗牛'
// a.book.price = '55'
// console.log(b)

// let a = {
//     name: '蜗牛'
// }
// let b = {
//     age: '18'
// }

// let c = Object.assign(a, b)
// console.log(c)

//Object.assign() 当执行的是基础数据类型时，是深拷贝；引用数据类型时，是浅拷贝
// ...解构运算符


let a = {
    name: 'wn',
    book: {
        title: 'you dont konw js',
        price: '45'
    }
}

let b = JSON.parse(JSON.stringify(a))

console.log(b)

a.name = '蜗牛'
a.book.price = '55'
console.log(b)