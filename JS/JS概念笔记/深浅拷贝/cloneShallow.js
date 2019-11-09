function cloneShallow(source) {
    var target = {}
    for (var key in source) { //in遍历对象,of遍历数组
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
        }
    }
    return target
}

let a = {
    name: 'wn',
    book: {
        title: 'you dont konw js',
        price: '45'
    }
}

let b = cloneShallow(a)
console.log(b)
a.name = '蜗牛'
a.book.price = '55'
console.log(b)